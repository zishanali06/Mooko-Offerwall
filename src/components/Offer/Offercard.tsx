import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Button, Card, Image, Icon } from 'react-native-elements';
import { NavigationStackScreenProps, NavigationStackOptions } from 'react-navigation-stack';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { getUser } from '../../utils/api';

export interface OffercardProps {
    offer: any
}

const Offercard: React.SFC<OffercardProps> = (props) => {

    let [userid, setUserid] = useState('');

    const getMember = async () => {
        let user = await getUser();
        console.log(`${props.offer.item.tracking_url}?sub1=${user.userid}`)
        setUserid(user.userid);
    }

    useEffect(() => {
        console.log(props.offer.item.tracking_url)
        getMember();
    }, [])

    const handlePress = () => {
        Linking.openURL(`${props.offer.item.tracking_url}?sub1=${userid}`)
    }

    return (
        <View>
            <LinearGradient colors={['#fafafa', '#f0f0f0', '#e0e0e0']} style={{ width: 350, margin: 0, height: 100, maxHeight: 100, backgroundColor: '#fff', flexDirection: 'row', borderStyle: 'solid', borderColor: '#A9A9A9', borderWidth: 0.5 }}>
                {/* <Image source={require('../../../assets/mookologo.png')} /> */}
                <View style={{ margin: 6, padding: 0, alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Image style={{ width: 70, height: 70 }} source={{ uri: 'https://i.pinimg.com/originals/1c/91/cc/1c91cc7685a7b81c37194068762a66be.png' }} /> */}
                    {props.offer.item.thumbnail_url === '' ? <Image style={{ width: 70, height: 70 }} source={{ uri: 'https://i.pinimg.com/originals/1c/91/cc/1c91cc7685a7b81c37194068762a66be.png' }} /> : <Image
                        style={{ width: 70, height: 70 }} source={{ uri: `${props.offer.item.thumbnail_url}` }} />}
                </View>
                <View style={{ flexDirection: 'column', width: 225, maxHeight: 100, justifyContent: 'flex-start', overflow: 'hidden' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 10, width: 150 }}>{props.offer.item.name}</Text>
                    <Text style={{ color: '#2db150', fontWeight: 'bold', position: 'absolute', marginLeft: 175, marginTop: 10 }}>FREE</Text>
                    <Text>Click to Complete Now!</Text>
                    <Text>EARN: ${props.offer.item.relationship.payouts.entries[0].payout_amount.toFixed(2)}</Text>
                </View>
                <View style={{ height: 100, alignItems: 'center' }}>
                    {/* <Icon name='chevron-right' iconStyle={{ height: 100, width: 30}}/> */}

                    <TouchableOpacity onPress={() => handlePress()}>
                        <Image source={{ uri: 'https://www.trzcacak.rs/myfile/full/362-3628000_chevron-svg-transparent-chevron-right-svg.png' }} style={{ width: 40, height: 50, paddingEnd: 25 }} />
                    </TouchableOpacity>

                </View>
            </LinearGradient>
        </View>

    );
}

export default Offercard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e96d03',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headertext: {
        fontSize: 30,
        marginTop: 300
    },
    buttonstyle: {

        width: 280,
        height: 30
    },
    container2: {
        flex: 1,
        justifyContent: "center"
    },
    container3: {
        flex: 5
    }
});



