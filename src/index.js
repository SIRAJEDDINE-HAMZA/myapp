import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css'
import './index.css'
import Firebase,{FirebaseContext} from './components/firebase'

ReactDOM.render(
  <FirebaseContext.Provider value = {new Firebase()}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
