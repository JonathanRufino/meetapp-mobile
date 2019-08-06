import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Meetups from './pages/Meetups';

const createRouter = (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator({
          Meetups,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );

export default createRouter;
