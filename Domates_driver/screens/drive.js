import React, {Component} from 'react';
import {View, StyleSheet, Button, Dimensions, Text} from 'react-native';
import openMap from 'react-native-open-maps';



export default class Drive extends Component{
    constructor(props){
        super(props);
        this.item = this.props.navigation.getParam('item', 'no_item');
    }
    goto_Destination = () => {
        console.log(this.item.geometry.location.lat, this.item.geometry.location.lng)
        openMap({
            latitude: this.item.geometry.location.lat,
            longitude: this.item.geometry.location.lng,
            start: "My Location",
            end: `${this.item.geometry.location.lng}, ${this.item.geometry.location.lat}`
        })
    }
    mark_Complete = () => {
        fetch('http://10.0.2.2:3000/package/finish', {
            method: 'POST',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id:id.toString()
            })
        }).then( res => res.json().then(resJson => {
            this.props.navigation.navigate('Home')
        }))
    }

    render = () => {

        console.log(this.item)
        
        return(
            <View style={styles.container} >
                <Text style={styles.bold} >Step 1</Text>
                <Button onPress={this.goto_Destination} title="Open in Maps"></Button>    
                <Text style={styles.bold}>Step2</Text>
                <Button onPress={this.mark_Complete} title="Mark as complete" ></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    bold: {
        fontSize: 30
    },
    container: {
        flex: 1
    }
})