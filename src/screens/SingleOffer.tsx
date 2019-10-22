import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { } from 'react-navigation';

interface SingleOfferProps {

}

interface SingleOfferState {

}
export default class SingleOffer extends React.Component<SingleOfferProps, SingleOfferState> {

    // static navigatorOptions = {
    //     headerTitle: "BING BING BOOM"
    // }


    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.headertext}>BING BING BOOM</Text>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28a745',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    headertext: {
        fontSize: 30,
        marginTop: 300
    }
});
