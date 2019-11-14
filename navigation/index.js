import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Initial from '../screens/Initial'
import AuthNavigation from './AuthNavigation'
import TabNavigation from './TabNavigation';

const SwitchNavigator = createSwitchNavigator(
  {
    Initial: Initial,
    Auth: AuthNavigation,
    App: TabNavigation
  },
  {
    initialRouteName: 'Initial'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
