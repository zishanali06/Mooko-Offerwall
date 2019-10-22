import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AllOffers from './screens/AllOffers';
import SingleOffer from './screens/SingleOffer';
import LogoTitle from './components/StackNav/LogoTitle';
import Login from './screens/Login';

const AppNavigator = createStackNavigator({
    //screens
    AllOffers,
    SingleOffer,
    Login
},{
    //generic stylings
    initialRouteName: 'Login',
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
});

export default createAppContainer(AppNavigator);