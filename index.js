//Imports
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';

//Format

const Style = {
  viewStyle: {
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#ccc',
    flex: 1, // 1 de 1:1
  },
  header: {
    backgroundColor: '#f1a',
    flex: 2, // de 2:12
    textAlign: 'center',
    color: '#fff',
  },
  content: {
    backgroundColor: '#b1a',
    flex: 9, // de 9:12
    textAlign: 'center',
    color: '#fff',
  },
  footer: {
    backgroundColor: '#71a',
    flex: 1, // de 1:12
    textAlign: 'center',
    color: '#fff',
  },
};

//Components
const App = () => {
  const {viewStyle, header, content, footer} = Style; //Destructuring Assingment
  return (
    <View style={viewStyle}>
      <Text style={header}>Header</Text>
      <Text style={content}>Content</Text>
      <Text style={footer}>Footer</Text>
    </View>
  );
};

//Render
AppRegistry.registerComponent('phrases', () => App);
