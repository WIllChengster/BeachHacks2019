import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {
    getDelta(lat, lon, distance) {
        const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
        distance = distance * 10000
        const latitudeDelta =distance / oneDegreeOfLatitudeInMeters;
        const longitudeDelta = distance / (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));
    
        return result = {
            latitude: lat,
            longitude: lon,
            latitudeDelta,
            longitudeDelta,
        }
    }
    render() {
        return (
            <MapView
                style = {styles.map}
                region = {
                    this.getDelta(33.7701, -118.1937, 5)
                }
                showsUserLocation = {true}
                showsMyLocationButton={true}
                
            />
        );
    }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        flex: 1,
        width: win.width,
        height: win.height,
    },
});