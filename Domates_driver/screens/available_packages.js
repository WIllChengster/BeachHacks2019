import React, { Component } from 'react';
import { StyleSheet ,View, Text, Image, Button} from 'react-native';
import Loading from '../components/loading'

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

    selectPackage = (package_id) => {
        // fetch('http://localhost', {
        //     method: 'POST',
        //     body: {
        //         id: package_id
        //     }
        // }).then( (res) => {
        //     //do something
        // })
    }

    render = () => {
        console.log(this.state);

        const package_map = this.state.packages.map((item, index) => {
            return(
                <View key={index} >
                    <Text>{item.Package_Description}</Text>
                </View>
            )
        })

        let loading = <View></View>

        if(this.state.loading){
            loading = <Loading></Loading>
        } else if (this.state.packages.length === 0){
            loading = <Text>There are no packges ready for pick up yet </Text>
        }

        return(
            <View style={styles.container} >
                <Text style={styles.title} >Packges Ready for Delivery</Text>
                {loading}
                {package_map}
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10
    },
    loading: {
        width: 10
    }
    
});
