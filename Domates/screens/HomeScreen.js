import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Map from '../components/Map'; 

export default class HomeScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Map></Map>
            <Text style={styles.welcome}>Welcome to Domates!</Text>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DonationForm')}>
                    <Text style={styles.button}>MAKE A DONATION</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5DDCB',
    },
    welcome: {
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 10,
        padding: 10,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    button: {
        backgroundColor: '#A7C5BD',
        borderRadius: 30,
        color: 'white',
        fontFamily: 'sans-serif-light',
        fontSize: 20,
        overflow: 'hidden',
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        textAlign:'center',
    }
});