import React, { Component } from 'react';
import { StyleSheet ,View, Text, Button} from 'react-native';

export default class AvailablePackages extends Component{
    render = () => {

        return(
            <View style={styles.container} >
                <Text style={styles.title} >Packges Ready for Delivery</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10
    },
});
