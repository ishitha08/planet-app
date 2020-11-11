import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigatiion';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';


export default function App() {
  return (
    <AppContainer/>
  );
}

const AppStackNavigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{headerShown:false}
    },
    details:{
      screen:DetailsScreen
    }
  },
  {intialRouteName:'Home'}
)
const AppContainer = createAppContainer(AppStackNavigator);
