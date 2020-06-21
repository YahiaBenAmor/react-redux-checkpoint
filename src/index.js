import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';
import { createStore,applyMiddleware   } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Reducer from './Components/Reducer';

const logger = store => next => action => {
console.log("dispatiching",action)
let result = next(action)
console.log("next state",store.getState())


  return result
  }

const store = createStore(Reducer,applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();