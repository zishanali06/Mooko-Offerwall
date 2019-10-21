import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AllOffers from './screens/AllOffers';

const AppNavigator = createStackNavigator({
    //screens
    AllOffers
},{
    //generic stylings
    initialRouteName: 'AllOffers',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#000000"
        },
        title: "Mooko App",
        headerTitleStyle: {
            fontWeight: 'bold'
        }
        // headerTitle: () => {}
    }
});

export default createAppContainer(AppNavigator);