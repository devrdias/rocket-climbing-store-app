import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/Main';

const AppNavigator = createStackNavigator(
  {
    Main,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#fff',
    },
  },
);

export default createAppContainer(AppNavigator);
