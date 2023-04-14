import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './Router';
import './fonts/Poppins-Light.ttf';
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Bold.ttf';
import { setupStore } from './store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
