import { createStackNavigator } from 'react-navigation-stack'
import AllOffers from '../src/screens/AllOffers';
import SingleOffer from '../src/screens/SingleOffer';

const AppNavigation = createStackNavigator(
  {
    //screens
    AllOffers,
    SingleOffer,
}, {
    //generic stylings
    initialRouteName: 'AllOffers',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#000000"
        },
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerTintColor: "#e96d03",
        title: "Mooko App",
        headerTitleContainerStyle: {
            left: 30,
            right: 5
        }
        // headerTitle: () => {<LogoTitle />}
    }
}
)

export default AppNavigation
