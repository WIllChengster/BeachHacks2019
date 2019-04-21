import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

export default class Package extends Component{
    
    _onpress = (id) => {
        this.props.select(id)
        console.log
    }

    render(){
        const {data, id} = this.props.item
        return(
            <TouchableHighlight onPress = { () => this._onpress(id) } underlayColor='lightgray' >
                <View style={styles.package} >

                    <Text onPress = { this._onpress } >{data.Address}</Text>
                    <Text>{data.Package_Description}</Text>
                </View>

            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    package: {
        flex: 1,
        borderStyle: 'solid',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10
    },
});