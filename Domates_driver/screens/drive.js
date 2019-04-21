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

    render = () => {

        console.log(this.item)
        
        return(
            <View>
                <Text style={styles.fontSize} >Step 1</Text>
                <Button onPress={this.goto_Destination} title="Open in Maps"></Button>    

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
    }
})