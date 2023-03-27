import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

export const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  history: [],
}

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        loading: true,
        requestParams: action.payload,
      }
    case 'FINISH':
      return {
        ...state,
        loading: false,
        data: action.payload,
        history: [...state.history, {requestParams: {...state.requestParams}, data: action.payload}]
      }
    case 'HISTORY':
      return {
        ...state,
        ...state.history[action.payload],
      }
    default:
      return state;
  }
}

const App = () => {

  // const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(requestReducer, initialState);

  useEffect(() => {
    console.log('An event occurred');
  });

  useEffect(() => {
    async function getData() {
      console.log('This should happen when requestParams changes!');
      let response = await axios(state.requestParams);
      let action = {
        type: 'FINISH',
        payload: response.data,
      }
      dispatch(action);
      // setData(response.data);
    }
    getData();
  }, [state.requestParams]);



  const callApi = (requestParams) => {
    let action = {
      type: 'START',
      payload: requestParams
    }
    dispatch(action);
    // setLoading(true);

    // setTimeout(() => {
    //   setRequestParams(requestParams);
    //   // setLoading(false);
    // }, 1000);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <div>Body: {state.requestParams.body}</div>
      <Form handleApiCall={callApi} />
      <History history={state.history}/>
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </React.Fragment>
  );

}

export default App;
