import React from 'react';
import { Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import { history, queryClient } from './utils';
import { Root } from './Root';
import { SelectedHostLocationContainer, StyleProvider } from './containers';
import { CurrentLocationContainer } from './containers/CurrentLocationContainer/CurrentLocationContainer';

export const App = () => (
  <StyleProvider>
    <QueryClientProvider client={queryClient}>
      <CurrentLocationContainer.Provider>
        <SelectedHostLocationContainer.Provider>
          <Router history={history}>
            <Root />
          </Router>
        </SelectedHostLocationContainer.Provider>
      </CurrentLocationContainer.Provider>
    </QueryClientProvider>
  </StyleProvider>
);
