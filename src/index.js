import React, { useEffect } from 'react';
import './config/ReactotronConfig';

import { Provider, useDispatch } from 'react-redux';
import { StatusBar, SafeAreaView } from 'react-native';
import store from './store';
import NavigationService from './services/NavigationService';

import { startup } from './store/modules/startup/startup.actions';
import Routes from './routes';

console.disableYellowBox = true;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startup());
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#38c172" />
      <Routes
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#38c172' }} />
    </>
  );
};

const ReduxContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxContainer;
