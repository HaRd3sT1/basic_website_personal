
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import LanguageWrapper from './components/Language';
// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { configureStore } from './state/store';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from "./App"

const { store, persistor } = configureStore({});

const app = (
  <Provider store={store}>
    {/* <LanguageWrapper> */}
      <PersistGate persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    {/* </LanguageWrapper> */}
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
