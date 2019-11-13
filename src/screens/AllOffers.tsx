import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { NavigationStackScreenProps, NavigationStackScreenComponent } from 'react-navigation-stack';
import { json, clearStorage } from '../utils/api';
import { FlatList } from 'react-native-gesture-handler';
import Offercard from '../components/Offer/Offercard';

interface AllOffersProps extends NavigationStackScreenProps{
    
}

const AllOffers: NavigationStackScreenComponent<AllOffersProps> = (props) => {

    // constructor(props: AllOffersProps){
    //     super(props);
    //     state = {
    //         blogs: [],
    //         param: props.navigation.getParam('reg', 'AllOffers')
    //     };
    // }

    let [offers, setOffers] = useState();


    let getOffers = async () => {
        try {
            let data = await fetch('https://api.eflow.team/v1/affiliates/offersrunnable', {
                headers: {
                    'Content-Type': 'application/json',
                    'x-eflow-api-key': 'raRE3jMGQOuHDzocCicBTw'
                }
            })
            let newdata = await data.json();
            setOffers(newdata.offers);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getOffers();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Button raised
                    buttonStyle={{ backgroundColor: '#e96d03', borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 150 }}
                    title='Logout'
                    onPress={() => {
                        clearStorage();
                        // Alert.alert("You are now Logged Out");
                        props.navigation.navigate("Login");
                    }} />
            </View>
            <View style={styles.container3}>
            <Text style={{marginHorizontal: 50, marginBottom: 20}}>Click on one of the offers below to complete! Once you complete the offer, please give the Member Tab up 5 minutes for your balance to update.</Text>
                <FlatList 
                data={offers}
                renderItem={(offer) => <Offercard offer={offer} />}
                keyExtractor={(offer: {network_offer_id: any, name: any}) => offer.network_offer_id.toString()}
                />
                    {/* <Text style={styles.headertext}>All Offers Page 44</Text>
            <Button title="Go To Offer" onPress={()=>props.navigation.navigate('SingleOffer')}/> */}
            </View>
        </View>
    )
}

AllOffers.navigationOptions = {
    title: 'Offer Wall'
}

export default AllOffers;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    },
    container2: {
        flex: 1,
        justifyContent: "center"
    },
    container3: {
        flex: 5,
        alignItems: 'center'
    }
});
