import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/AppHeader';

export default class Read extends Component {
  render() {
    return (
      <View>
        <Header/>
        <Text style = {{alignSelf:'center', fontSize:100}}>Read</Text>
      </View>
    );
  }
}