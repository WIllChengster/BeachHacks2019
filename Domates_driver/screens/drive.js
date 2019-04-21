import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');

export default class Drive extends Component{
    render = () => {
        return(
            <View>


                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: exprected_resp.geometry.location.lat,
                        longitude: exprected_resp.geometry.location.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0922 * (width / height),
                    }}
                    showsUserLocation
                />                
            </View>
        )
    }
}