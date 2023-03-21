import React, { useState } from 'react';

import './Form.scss';

const Form = (props) => {

  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [json, setJson] = useState('');


  const handleClick = (e) => {
    setMethod(e.target.innerText);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      json: json,
    };
    props.handleApiCall(formData);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleClick} style={{ backgroundColor: method === "GET" ? "red" : "grey" }}>GET</span>
          <span id="post" onClick={handleClick} style={{ backgroundColor: method === "POST" ? "red" : "grey" }}>POST</span>
          <span id="put" onClick={handleClick} style={{ backgroundColor: method === "PUT" ? "red" : "grey" }}>PUT</span>
          <span id="delete" onClick={handleClick} style={{ backgroundColor: method === "DELETE" ? "red" : "grey" }}>DELETE</span>
        </label>
        {method === "POST" && <textarea onChange={(e) => setJson(e.target.value)}/>}
        {method === "PUT" && <textarea onChange={(e) => setJson(e.target.value)}/>}
      </form>
    </>
  );

}

export default Form;
