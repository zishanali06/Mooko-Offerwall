import * as React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
    AsyncStorage
} from 'react-native';

import { getAccessToken } from '../utils/api';
import { NavigationStackScreenProps } from 'react-navigation-stack';

interface Props extends NavigationStackScreenProps {};
interface State {};

export default class AuthLoading extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this._accessToken();
    }

    async _accessToken() {
        try {
            let token = await getAccessToken();
            this.props.navigation.navigate(token ? 'App' : 'Auth');
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
        <View>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
        )
    }
}
