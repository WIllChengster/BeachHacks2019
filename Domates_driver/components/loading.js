import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';


export default class Loading extends Component{
    render(){
        return(
            <View>
                <Image source={require('../assets/loading.gif')} />
            </View>
        )
    }
}
