import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight  } from 'react-native';



export default class ChooseLocation extends Component{

    _press = (item) => {
        this.props.navigation.navigate('Drive', {item})
    }
    
    render(){
        const data = this.props.navigation.getParam('data', 'no_data');
        if(data.success === false){
            return(
                <View>
                    <Text>There aren't any nearby donation centers</Text>
                </View>
            )
        }

        const location_map = data.destinations.map((item, index) => {
            return(
                <TouchableHighlight key={index} style={styles.location_container} onPress={()=> this._press(item)} underlayColor='lightgray' >
                    <View key={index} >
                        <Text>{item.name}</Text>
                        <Text>{item.vicinity}</Text>
                    </View>
                </TouchableHighlight>
            )
        })
        
        console.log(data)
        return(
            <View style={styles.container} >
                <Text style={styles.title} >Choose a delivery location</Text>

                {location_map}

            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10
    },
    map: {
        flex:1
    },
    location_container: {
        flex: 1,
        borderStyle: 'solid',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        justifyContent:'flex-start'
    },
  });