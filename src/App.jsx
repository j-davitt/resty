import React, { useEffect, useState } from 'react';
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

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);
  // const [request, setRequest] = useState(null);

  useEffect(() => {
    console.log('An event occurred');
  });

  useEffect(() => {
    async function getData() {
      console.log('This should happen when requestParams changes!');
      let response = await axios(requestParams);
      setData(response.data);
    }
    getData();
  }, [requestParams]);



  const callApi = (requestParams) => {
    setLoading(true);

    setTimeout(() => {
      setRequestParams(requestParams);
      setLoading(false);
    }, 1000);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <div>Body: {requestParams.body}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  );

}

export default App;
