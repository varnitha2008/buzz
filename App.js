
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FBscreen from "./screens/fbscreen"
import INSTAscreen from './screens/instascreen';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends Component{
  render(){
    return(
<AppContainer/>
    )
  }
}

var TabNavigator = createBottomTabNavigator({
  facebook : {screen :FBscreen},
  instagram : {screen : INSTAscreen}
})

const AppContainer = createAppContainer(TabNavigator)
