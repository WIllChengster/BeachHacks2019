import React, {Component} from 'react';
import {StyleSheet, Dimensions, PermissionsAndroid} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 33.7701,
            longitude: -118.1937,
            distance: 5
        }
    }

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
                    this.getDelta(this.state.latitude, this.state.longitude, this.state.distance)
                }
                showsUserLocation = {true}
                showsMyLocationButton={true}
                onMapReady={() => {
                    PermissionsAndroid.request(
                      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    ).then(granted => {
                      //alert(granted) // just to ensure that permissions were granted
                    });
                  }}
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