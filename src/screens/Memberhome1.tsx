import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { json, getUser } from '../utils/api';

export interface Memberhome1Props {
    
}
 
export interface Memberhome1State {
    name: string
}
 
class Memberhome1 extends React.Component<Memberhome1Props, Memberhome1State> {

    constructor(props: Memberhome1Props) {
        super(props);
        this.state = { 
            name: '' 
        };
    }

    async componentDidMount(){
        try {
            let user = await getUser();
            console.log(user.userid);
            let data = await json(`http://rewardhog.herokuapp.com/api/user/${user.userid}`);
            console.log(data);
            this.setState({name: data.name})
        } catch (error) {
            console.log(error);
        }
    }

    render() { 
        return ( 
            <View style={styles.container}>
            <LinearGradient colors={['#e96d03', '#f69222', '#ba080e']} style={{
                position: 'absolute', alignItems: 'center',
                justifyContent: 'center', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#fff', flexDirection: 'row'
            }}>
                <Text style={{ fontSize: 25, color: 'black' }}>
                    Welcome HEY{this.state.name}
                </Text>
                <Text style={{ fontSize: 25, color: 'black' }}>
                    Your Reward Balance is: {}
                </Text>
            </LinearGradient>
        </View>
        );
    }
}

export default Memberhome1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});