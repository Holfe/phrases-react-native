//Imports
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';

//Format

const Style = {
  main: {
    backgroundColor: '#ccc',
    flex: 1, // 1 de 1:1
  },
  header: {
    backgroundColor: '#f1a',
    flex: 2, // de 2:12
  },
  content: {
    backgroundColor: '#b1a',
    flex: 9, // de 9:12
  },
  footer: {
    backgroundColor: '#71a',
    flex: 1, // de 1:12
  },
  viewStyle: {
    backgroundColor: '#fff',
    height: 400,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
};

//Components
const App = () => {
  const {main, header, content, footer} = Style; //Destructuring Assingment
  return (
    <View style={main}>
      <Text style={header}>Header</Text>
      <Text style={content}>Content</Text>
      <Text style={footer}>Footer</Text>
    </View>
  );
};

//Render
AppRegistry.registerComponent('phrases', () => App);
