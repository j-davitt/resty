import React from 'react';
import JSONPretty from 'react-json-pretty';
import './style.scss';

// import 'react-json-pretty/themes/1337.css';

const Results = (props) => {

  const { data } = props;


  return (
    <section>
      {
        props.loading
          ? <div>LOADING...</div>
          : <div>{props.data ? <JSONPretty id="json-pretty" data={data}/> : null}</div>
      }

    </section>
  );

}

export default Results;
