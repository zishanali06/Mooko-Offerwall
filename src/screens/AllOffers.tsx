import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';
import { NavigationStackScreenProps, NavigationStackOptions } from 'react-navigation-stack';
import { json } from '../utils/api';

interface AllOffersProps extends NavigationStackScreenProps {

}

interface AllOffersState {
    blogs: {
        title: string
    }[]
}
export default class AllOffers extends React.Component<AllOffersProps, AllOffersState> {

    static navigatorOptions: NavigationStackOptions = {
        title: "Testing"
    }
    constructor(props: AllOffersProps){
        super(props);
        this.state = {
            blogs: []
        };
    }

    async componentDidMount() {
        try {
            let blogs = await json("https://deployed-blog-demo.herokuapp.com/api/blogs");
            this.setState({
                blogs
            })
        } catch {
            Alert.alert("Cant Get Info");
        }
    }

    renderOffers = () => {
        return this.state.blogs.map((blog, index)=>{
            return <Text key={index} style={styles.headertext}>{blog.title}</Text>
        })
    }

    render = () => {
        return (
        <View style={styles.container}>
            <ScrollView>
            {this.renderOffers()}
            {/* <Text style={styles.headertext}>All Offers Page 44</Text>
            <Button title="Go To Offer" onPress={()=>this.props.navigation.navigate('SingleOffer')}/> */}
            </ScrollView>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e96d03',
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
