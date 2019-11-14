import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationStackScreenProps, NavigationStackScreenComponent } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { getUser, json } from '../utils/api';

interface RewardHomeProps extends NavigationStackScreenProps {

}

const RewardHome: NavigationStackScreenComponent<RewardHomeProps> = (props) => {

    let [name, setName] = useState('');
    let [balance, setBalance] = useState('');

    const getMemberinfo = async () => {
        try {
            let user = await getUser();
            console.log(user.userid);
            let data = await json(`http://rewardhog.herokuapp.com/api/user/${user.userid}`);
            console.log(data[0].name);
            setName(data[0].name);
            setBalance(data[0].balance);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMemberinfo();
    });

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#e96d03', '#f69222', '#ba080e']} style={{
                position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#fff', flexDirection: 'row'
            }}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={{ fontSize: 25, color: 'black', width:'100%' }}>
                        Welcome to Reward Page
                    </Text>
                    <Text style={{ fontSize: 25, color: 'black', width: '100%' }}>
                        Gift Card to Buy Below:
                    </Text>
                </View>
                <View>
                    
                </View>
            </LinearGradient>
        </View>
    )
}

RewardHome.navigationOptions = {
    title: 'Member Dashboard'
}

export default RewardHome;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
