import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Welcome name="Divyank" />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
