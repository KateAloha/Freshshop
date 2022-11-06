import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import CustomerReducer from "./reducers/CustomerReducer"
import ProductListReducer from "./reducers/ProductListReducer"
import FilterReducer from './reducers/FilterReducer';
import ProductDetailReducer from "./reducers/ProductDetailReducer"

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootReducer = combineReducers({
  CustomerReducer,
  ProductListReducer,
  FilterReducer,
  ProductDetailReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
