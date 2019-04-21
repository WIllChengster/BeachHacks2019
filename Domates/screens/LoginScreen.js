import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Picker, TextInput, TouchableOpacity} from 'react-native';

export default class DonationFormScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "email",
            password: "password",
        }
    }
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Email:</Text>

            <TextInput
                style={styles.description}
                onChangeText = {(email) => this.setState({email})}
                multiline = {false}
            ></TextInput>

            <Text style={styles.subtitle}>Password:</Text>
            <TextInput
                style={styles.description}
                onChangeText = {(password) => this.setState({password})}
                multiline = {false}
            ></TextInput>

            <View style={styles.bottom}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text style={styles.button}>LOGIN</Text>
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
    title: {
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        textAlign: 'center',
        margin: 10,
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'sans-serif-light',
        textAlign: 'center',
        margin: 10,
    },
    description: {
        backgroundColor: '#FFF',
        height: 50, 
        width: 300,
        borderRadius: 10,
        fontFamily: 'sans-serif-light',
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