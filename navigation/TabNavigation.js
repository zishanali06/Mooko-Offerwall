import React from 'react'
import AppNavigation from './AppNavigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation-stack'
import Memberhome from '../src/screens/Memberhome'
import RewardHome from '../src/screens/RewardHome'

const TabNavigation = createBottomTabNavigator(
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
        ),
        Rewards: createStackNavigator(
            {
                RewardHome: RewardHome
            },
            {
                initialRouteName: 'RewardHome',
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
                    iconName = 'ios-folder-open';
                } else if (routeName === 'Member') {
                    iconName = `ios-contact`;
                } else if (routeName === 'Rewards') {
                    iconName = `ios-cash`;
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

export default TabNavigation
