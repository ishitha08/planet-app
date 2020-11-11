import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';

export default class HomeScreen extends React.Componenet{
    constructor(props){
        super(props);
        this.state = {
            listData:[],
            url:'http://localhost:5000/'
        }
    }
    componentDidMount(){
        this.getPlanet();

    }
    getPlanet = ()=>{
        const {url} = this.state;
        axios
        .get(url)
        .then(Response=>{
            return this.setState({
                listData:Response.data.data
            })
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    renderItem = ({item,index})=>(
        <ListItem
        key = {index}
        title = {'Planet : ${item.name}'}
        subtitle = {'Distance from Earth: ${item.Distance_from_Earth}'}
        bottomDivider
        chevron
        onPress = {()=>{this.props.navigation.navigate('Details',{planet_names:item.name})}}
        />
    )
    keyExtractor = (item,index)=>index.toString();
    render(){
        const {listData} = this.state;
        if(listData.length===0){
            return(
                <Text>Loading</Text>
            )
        }
        return(
            <View>
                <SafeAreaView/>
                <View>
                    <Text>Planets World</Text>
                </View>
                <View>
                    <FlatList
                    keyExtractor = {this.keyExtractor}
                    data = {this.state.listData}
                    renderItem = {this.renderItem}
                    />
                </View>
            </View>
        )
    }
 }