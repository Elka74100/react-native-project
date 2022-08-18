import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store }  from './redux/store';
import AppNavContainer from './navigations';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavContainer></AppNavContainer>
    </Provider>
  );
};

export default App;
