import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './main/Form.jsx';



ReactDOM.render(
  <div className='content'>
    <div className='formContent'>
      <h1 className='formTitle'>Login</h1>
      <Form />
    </div>
  </div> 
, document.getElementById('root'))