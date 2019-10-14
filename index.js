//Imports
import React from 'react';
import {AppRegistry, View, ImageBackground, Text} from 'react-native';

//Format

const Style = {
  viewStyle: {
    margin: 5,
  },
  imgStyle: {
    width: 300,
    height: 300,
    justifyContent: 'flex-end',
  },
  textStyle: {
    color: '#c1f',
    backgroundColor: '#fff',
    fontSize: 20,
    width: 300,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

//Components
const App = () => {
  const {viewStyle, imgStyle, textStyle} = Style;
  return (
    <View style={viewStyle}>
      <ImageBackground source={require('./img/uvas.png')} style={imgStyle}>
        <Text style={textStyle}>Legenda da Foto</Text>
      </ImageBackground>
    </View>
  );
};

//Render
AppRegistry.registerComponent('phrases', () => App);
