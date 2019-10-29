import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from './screens/SplashScreen';
import Main from './screens/Main';

const AppNavigator = createStackNavigator(
  {
    SplashScreen,
    Main,
  },
  {
    initialRouteName: 'SplashScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#38c172',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
