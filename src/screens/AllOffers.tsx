import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AllOffersProps {

}

const AllOffers: React.SFC<AllOffersProps> = () => {

    let [test, setTest] = useState();

    useEffect(() => {
        setTest(39)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>All Offers Page</Text>
        </View>
    );
}

export default AllOffers;

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
