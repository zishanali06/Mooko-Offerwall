import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text, Button, Input } from 'react-native-elements'
import { NavigationStackScreenProps, NavigationStackOptions } from 'react-navigation-stack';
import { json } from '../utils/api';

interface Props {}
interface State {
    email: string,
    password: string
}

export default class Login extends React.Component<Props, State> {

    static navigatorOptions: NavigationStackOptions = {
        title: "Testing"
    }
    constructor(props: Props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        
    }

    async handleLogin() {
        try {
            let result = await json("http://jobsearcher.herokuapp.com/auth/login", 'POST', {
                email: this.state.email,
                password: this.state.password
            })
            console.log(result);
        } catch (error) {
            console.log(error);
            Alert.alert("Contact Server Admin");
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{flex:1, justifyContent: 'flex-end'}}>
                    <Input
                    containerStyle={{marginVertical: 5}}
                    leftIcon={{ type: 'font-awesome', name: 'envelope'}}
                    inputContainerStyle={{width: 270, marginLeft: 2}}
                    placeholder="  Email"
                    value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})}/>
                    <Input
                    secureTextEntry={true}
                    textContentType="password"
                    containerStyle={{marginVertical: 5}}
                    leftIcon={{ type: 'font-awesome', name: 'key'}}
                    inputContainerStyle={{width: 270}}
                    placeholder="  Password"
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}/>
                </View>
                <View style={{flex:1}}>
                    <Button 
                    raised
                    title="Login"
                    containerStyle={{margin: 10}}
                    buttonStyle={{backgroundColor: "#e96d03", width: 200}}
                    onPress={()=>{
                        this.handleLogin();
                    }}/>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d72ed',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    headertext: {
        fontSize: 30,
        marginTop: 300
    },
    buttonstyle: {
        width: 280,
        height: 30
    }
});