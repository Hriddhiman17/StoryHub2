import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';
import Header from '../components/AppHeader';

export default class Write extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      story: ''
    }
  }
  submitStory() {
    db.collection("Poets").set({
      'Title': this.state.title,
      'Author': this.state.author,
      'Story': this.state.story
  })
  }
  
  render() {
    return (
      <View>
        <Header/>
        <TextInput
          style={styles.inputBox}
          placeholder="Story Title"
          placeholderTextColor='black'
          onChangeText={text =>
            this.setState({
              title: text
            })}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Author"
          placeholderTextColor='black'
          onChangeText={text =>
            this.setState({
              author: text
            })}
        />
        <TextInput
          style={[styles.inputBox, { height: 250 }]}
          multiline={true}
          placeholder="Write your story here"
          placeholderTextColor='black'
          onChangeText={text =>
            this.setState({
              story: text
            })}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.submitStory}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  head: {
    textAlign: 'center',
    fontSize: 22,
    backgroundColor: '#FFC0CB',
    padding: 20,
  },
  inputBox: {
    alignSelf: 'center',
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    paddingLeft: 15,
    marginTop: 25
  },
  submitButton: {
    alignSelf: 'center',
    backgroundColor: '#FFC0CB',
    padding: 10,
    marginTop: 10
  }
})