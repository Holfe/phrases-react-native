//Imports
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';

//Components
const App = () => {
  return (
    <View>
      <Text>Frases do Dia!</Text>
    </View>
  );
};

//Render
AppRegistry.registerComponent('phrases', () => App);
