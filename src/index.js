import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'evergreen-ui'
/*
ReactDOM.render(
  <React.StrictMode>
    <div>Nada por aquí.</div>
  </React.StrictMode>,
  document.getElementById('root')
);*/
const container = document.getElementById('root')

ReactDOM.render(<App />, container)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
