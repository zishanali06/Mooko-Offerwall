import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text, Button, Input } from 'react-native-elements'
import { NavigationStackScreenProps, NavigationStackOptions } from 'react-navigation-stack';
import { json, SetAccessToken, getUser } from '../utils/api';

interface Props extends NavigationStackScreenProps {}
interface State {
    email: string,
    password: string,
    fName: string,
    lName: string,
    age: string
}

export default class Register extends React.Component<Props, State> {

    static navigatorOptions: NavigationStackOptions = {
        title: "Testing"
    }
    constructor(props: Props){
        super(props)

        this.state = {
            email: '',
            password: '',
            fName: '',
            lName: '',
            age: ''
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

    async handleRegister() {
        // try {
        //     let result = await json("http://jobsearcher.herokuapp.com/auth/login", 'POST', {
        //         email: this.state.email,
        //         password: this.state.password
        //     })
        //     console.log(result);
        //     if(result){
        //         await SetAccessToken(result.token, { userid: result.userid, role: result.role});
        //         let user = await getUser();
        //         if(user && user.role === 'user') {
        //             console.log(user);
        //             this.props.navigation.navigate('AllOffers');
        //         } else {
        //             Alert.alert('Invalid Credentials, Please Try Again')
        //         }
        //     }
        // } catch (error) {
        //     console.log(error);
        //     Alert.alert("Contact Server Admin");
        // }
        
        try {
            let data = await json('http://rewardhog.herokuapp.com/auth/register', 'POST', { email: this.state.email, password: this.state.password, name: `${this.state.fName} ${this.state.lName}` });
            if (data) {
                SetAccessToken(data.token, { userid: data.userid, role: data.role });
                if (data.role === 'user') {
                    this.props.navigation.navigate('App', { reg: 'yes' });
                } else {
                    this.props.navigation.navigate('Login');
                }
            } else {
                this.props.navigation.navigate('Login');
            };
        } catch (e) {
            console.log(e);
        }

    }

    render() {
        return(
            <View style={styles.container}>
                    <Input
                    containerStyle={{marginVertical: 5, marginLeft: 80}}
                    inputContainerStyle={{width: 270, marginLeft: 2}}
                    placeholder="  First Name"
                    value={this.state.fName}
                    onChangeText={(text) => this.setState({fName: text})}/>
                    <Input
                    containerStyle={{marginVertical: 5, marginLeft: 80}}
                    inputContainerStyle={{width: 270}}
                    placeholder="  Last Name"
                    value={this.state.lName}
                    onChangeText={(text) => this.setState({lName: text})}/>
                    <Input
                    containerStyle={{marginVertical: 5, marginLeft: 80}}
                    inputContainerStyle={{width: 270}}
                    placeholder="  Email"
                    value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})}/>
                    <Input
                    secureTextEntry={true}
                    textContentType="password"
                    containerStyle={{marginVertical: 5, marginLeft: 80}}
                    inputContainerStyle={{width: 270}}
                    placeholder="  Password"
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}/>
                    <Input
                    containerStyle={{marginVertical: 5, marginLeft: 80}}
                    inputContainerStyle={{width: 270}}
                    placeholder="  Age"
                    value={this.state.age}
                    onChangeText={(text) => this.setState({age: text})}/>
                    <Button 
                    raised
                    title="Register"
                    containerStyle={{margin: 10}}
                    buttonStyle={{backgroundColor: "#e96d03", width: 200}}
                    onPress={()=>{
                        this.handleRegister();
                    }}/>
                    <Button 
                    raised
                    title="Back to Login"
                    containerStyle={{margin: 10}}
                    buttonStyle={{backgroundColor: "#e96d03", width: 200}}
                    onPress={()=>{
                        this.props.navigation.navigate('Login');
                    }}/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d72ed',
        alignItems: 'center',
        justifyContent: 'center'
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