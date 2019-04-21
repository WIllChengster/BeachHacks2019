import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Picker, TextInput, TouchableOpacity} from 'react-native';

export default class DonationFormScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "Category",
            description: "Enter a description",
        }
    }
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Make a Donation</Text>
            <Text style={styles.subtitle}>Select a Category:</Text>

            <Picker
                selectedValue = {this.state.category}
                onValueChange = {(itemValue, itemIndex) =>
                    this.setState({category: itemValue})
                }
                prompt = {"Categories"}
                style={styles.dropdown}
            >
                <Picker.Item label="Select..." value="0"/>
                <Picker.Item label="Appliances" value="Appliances"/>
                <Picker.Item label="Automobiles" value="Automobiles"/>
                <Picker.Item label="Children's Clothing" value="Children's Clothing"/>
                <Picker.Item label="Furniture" value="Furniture"/>
                <Picker.Item label="Household Goods" value="Household Goods"/>
                <Picker.Item label="Men's Clothing" value="Men's Clothing"/>
                <Picker.Item label="Miscellaneous" value="Miscellaneous"/>
                <Picker.Item label="Women's Clothing" value="Women's Clothing"/>
            </Picker>

            <Text style={styles.subtitle}>Enter a Description:</Text>
            <TextInput
                style={styles.description}
                onChangeText = {(description) => this.setState({description})}
                multiline = {true}
            ></TextInput>

            <View style={styles.bottom}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DonationForm')}>
                    <Text style={styles.button}>SUBMIT</Text>
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
    dropdown: {
        height: 50,
        width: 200,
        color: '#FFF',
        backgroundColor: '#A7C5BD',
    },
    description: {
        backgroundColor: '#FFF',
        height: 200, 
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