import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { Wrapper } from '../wrapper/wrapper.component';

const App = () => {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};

export { App };
