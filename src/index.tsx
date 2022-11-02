import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import '@/assets/styles/switch.scss';
import { ApolloProvider } from '@apollo/client';
import { clientSub } from '@services/graphql-client';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/redux/store';
import './i18n';
import routes from './router';

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback="loading">
      <Provider store={store}>
        {renderRoutes(routes)}
        <ApolloProvider client={clientSub}>
          <div />
        </ApolloProvider>
      </Provider>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
