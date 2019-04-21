import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');


const exprected_resp = {
        "geometry": {
            "location": {
                "lat": 33.7271747,
                "lng": -117.8427461
            },
            "viewport": {
                "northeast": {
                    "lat": 33.72859807989272,
                    "lng": -117.8415060701073
                },
                "southwest": {
                    "lat": 33.72589842010728,
                    "lng": -117.8442057298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "ba06d56e1e10a96138bb46d7238da57c0c7b1664",
        "name": "Big Brothers Big Sisters of Orange County",
        "opening_hours": {
            "open_now": false
        },
}

export default class Drive extends Component{
    render(){
        return(
            <View>
                <Text>Driveradajkdaw</Text>
            </View>

            // <MapView
            //     style={styles.map}
            //     // provider={PROVIDER_GOOGLE}
            //     region={{
            //         latitude: exprected_resp.geometry.location.lat,
            //         longitude: exprected_resp.geometry.location.lng,
            //         latitudeDelta: 0.0922,
            //         longitudeDelta: 0.0922 * (width / height),
            //     }}
            //     // showsUserLocation
            // />
        )
    }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
        flex:1
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    },
  });