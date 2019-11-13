import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Memberhome from './screens/Memberhome';


import AllOffers from './screens/AllOffers';
import SingleOffer from './screens/SingleOffer';
import Login from './screens/Login';
import Register from './screens/Register';

import AuthLoading from './screens/AuthLoading';

const AuthStack = createStackNavigator({
    Login: Login,
    Register
}, {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#4a99e8"
        },
        title: 'Login'
    }
})

const AppStack = createStackNavigator({
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
});

const Memberstab = createBottomTabNavigator(
    {
        Offers: AppStack,
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

export default createAppContainer(createSwitchNavigator(
    {
        App: Memberstab,
        Auth: AuthStack,
        AuthLoading: AuthLoading
    },
    {
        initialRouteName: 'AuthLoading'
    }
));