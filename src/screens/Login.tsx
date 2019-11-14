import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text, Button, Input, Image } from 'react-native-elements'
import { NavigationStackScreenProps, NavigationStackOptions } from 'react-navigation-stack';
import { json, SetAccessToken, getUser } from '../utils/api';


interface Props extends NavigationStackScreenProps {}
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

    async componentDidMount() {
        try{
            let user = await getUser();
            if(user && user.role === 'user'){
                this.props.navigation.navigate('AllOffers');
            }
        } catch(e){
            console.log(e);
        }
    }

    async handleLogin() {
        try {
            let result = await json("http://rewardhog.herokuapp.com/auth/login", 'POST', {
                email: this.state.email,
                password: this.state.password
            })
            if(result){
                await SetAccessToken(result.token, { userid: result.userid, role: result.role});
                let user = await getUser();
                if(user && user.role === 'user') {
                    this.props.navigation.navigate('AllOffers');
                } else {
                    Alert.alert('Invalid Credentials, Please Try Again')
                }
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Contact Server Admin");
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{flex:1, justifyContent: 'flex-end'}}>
                    {/* <Image
                    style={{ width: 250}}
                    source={{uri: 'https://mooko.media/wp-content/uploads/2019/08/Mooko_Logo_Hi_Res_Transparent_BG.png'}}
                    /> */}
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
                    <Button 
                    raised
                    title="Register"
                    containerStyle={{margin: 10}}
                    buttonStyle={{backgroundColor: "#e96d03", width: 200}}
                    onPress={()=>{
                        this.props.navigation.navigate('Register');
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