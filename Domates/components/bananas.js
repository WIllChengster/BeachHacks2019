import React, {Component} from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import map from '.././images/map.png';


export default class Bananas extends Component {
    render() {
      return (
        <Image source={map} style={styles.image}/>
      );
    }
  }

  const win = Dimensions.get('window');
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      alignSelf: 'stretch',
      width: win.width,
      height: win.height,
    },
  });