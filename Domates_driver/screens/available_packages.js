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
        fetch('URL/driver/looking')
        //fetch THEN set state to our results.
        this.setState({
            loading: false
        })
    }

    selectPackage = (package_id) => {
        fetch('URL/driver/select', {
            method: 'POST',
            body: {
                id: package_id
            }
        }).then( (res) => {
            //do something
        })
    }

    render = () => {
        console.log(this.state);

        const package_map = this.state.packages.map((item, index) => {
            return(
                <View>
                    <Text>Its a package!</Text>
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
