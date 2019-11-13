import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Initial from '../screens/Initial'
import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'
import { Ionicons } from '@expo/vector-icons'

const SwitchNavigator = createSwitchNavigator(
  {
    Initial: Initial,
    Auth: AuthNavigation,
    App: Memberstab
  },
  {
    initialRouteName: 'Initial'
  }
)

const Memberstab = createBottomTabNavigator(
  {
      Offers: AppNavigation,
      Member: createStackNavigator(
          {
              Memberhome
          },
          {
              initialRouteName: 'Memberhome',
              defaultNavigationOptions: {
                  headerStyle: {
                      backgroundColor: "#000000"
                  },
                  headerTitleStyle: {
                      fontWeight: 'bold'
                  },
                  headerTintColor: "#e96d03",
                  title: "Dashboard",
                  headerTitleContainerStyle: {
                      left: 30,
                      right: 5
                  }
                  // headerTitle: () => {<LogoTitle />}
              }
          }
      )
  },
  {
      initialRouteName: 'Offers',
      defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ tintColor }) => {
              let { routeName } = navigation.state;
              let iconName;
              let IconComponent = Ionicons;
              if (routeName === 'Offers') {
                  iconName = 'ios-cash';
              } else if (routeName === 'Member') {
                  iconName = `ios-contact`;
              }
              return (<IconComponent name={iconName} size={25} color={tintColor} />)
          }
      }),
      tabBarOptions: {
          activeBackgroundColor: '#e96d03',
          inactiveBackgroundColor: '#000000',
          activeTintColor: 'black',
          inactiveTintColor: '#e96d03'
      }
  }
);

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
