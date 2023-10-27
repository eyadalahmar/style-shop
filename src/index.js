import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';

const persistor = persistStore(store);

const root = document.getElementById('root');
   
ReactDOM.render(
   <React.StrictMode>
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
         <App />
      </HashRouter>
    </PersistGate>
   </Provider>
 </React.StrictMode>,
 root
);