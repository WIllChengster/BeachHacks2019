import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends Component {
    render() {
        // console.log(this.props)
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome, Domates Driver!</Text>
                <Button
                    title='Continue'
                    onPress={() => this.props.navigation.navigate('AvailablePackages')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10
    },
});
