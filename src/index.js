  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';
  import 'bootstrap/dist/css/bootstrap.min.css';

  // Configurazione Redux su React
  import { Provider } from 'react-redux';
  import { combineReducers, configureStore } from '@reduxjs/toolkit';
  import booksReducer from './reducers/booksReducer';
  import commentReducer from './reducers/commentReducer';


  const reducer = combineReducers({
    booksStore: booksReducer,
    commentsStore : commentReducer
  })
  const store = configureStore({
    reducer,
  })

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
