import React, { Component } from 'react';
import { StyleSheet ,View, Text, Image, Button, FlatList} from 'react-native';
import Loading from '../components/loading';
import Package from '../components/package'

export default class AvailablePackages extends Component{
    constructor(props){
        super(props);
        this.state={
            loading: true,
            packages: []
        }
    }

    componentDidMount = () => {
        fetch('http://10.0.2.2:3000/driver/looking', {
            method: 'GET',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then(resJson => {
            this.setState({
                loading: false,
                packages: resJson
            })
        })

    }

    selectPackage = (id) => {
        fetch('http://10.0.2.2:3000/package/deliver', {
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
            this.props.navigation.navigate('Drive', {
                data: resJson
            } )
        }))
    }

    _keyExtractor = (item, index) => item.id;

    _renderItem = (item) => (
        <Package 
            {...item} 
            select={this.selectPackage} />
    )


    render = () => {
        let loading = <View></View>

        if(this.state.loading){
            loading = <Loading></Loading>
        } else if (this.state.packages.length === 0){
            loading = <Text>There are no packges ready for pick up yet </Text>
        }

        return(
            <View style={styles.container} >
                <Text style={styles.title} >Packges Ready for Delivery</Text>
                <View style={styles.package_container} >
                    {loading}
                    {/* {package_map} */}
                    <FlatList
                        data={this.state.packages}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        alignItems: 'stretch',

    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10
    },
    loading: {
        width: 10
    },
    package_container: {
        flex: 1,
        alignItems: 'stretch',
    },

});
