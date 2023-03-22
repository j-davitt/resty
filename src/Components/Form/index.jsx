import React, { useState } from 'react';

import './Form.scss';

const Form = (props) => {

  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [data, setData] = useState('');


  const handleClick = (e) => {
    setMethod(e.target.innerText);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      data,
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
          <span id="get" data-testid="form-get" onClick={handleClick} style={{ backgroundColor: method === "GET" ? "green" : "grey" }}>GET</span>
          <span id="post" data-testid="form-post" onClick={handleClick} style={{ backgroundColor: method === "POST" ? "orange" : "grey" }}>POST</span>
          <span id="put" data-testid="form-put" onClick={handleClick} style={{ backgroundColor: method === "PUT" ? "orange" : "grey" }}>PUT</span>
          <span id="delete" data-testid="form-delete" onClick={handleClick} style={{ backgroundColor: method === "DELETE" ? "red" : "grey" }}>DELETE</span>
        </label>
        {method === "POST" && <textarea onChange={(e) => setData(e.target.value)}/>}
        {method === "PUT" && <textarea onChange={(e) => setData(e.target.value)}/>}
      </form>
    </>
  );

}

export default Form;
