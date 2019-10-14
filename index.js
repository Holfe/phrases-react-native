//Imports
import React from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

//Format

const Style = {
  viewStyle: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 250,
    height: 140,
  },
  btn: {
    backgroundColor: '#538503',
    paddingVertical: 20,
    paddingHorizontal: 70,
    marginTop: 20,
    border: 2,
    borderRadius: 5,
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

const generatePhrase = () => {
  var rand = Math.random();
  rand = Math.floor(rand * 5);

  //Phrases
  var phrases = [];
  phrases[0] = 'Você é uma pessoa maravilhosa!';
  phrases[1] = 'Tudo vai dar certo no dia de hoje!';
  phrases[2] = 'A sorte está do seu lado!';
  phrases[3] = 'May the force be with you!';
  phrases[4] = 'A vida sorri para queles que se esforçam!';

  var phrase = phrases[rand];
  // eslint-disable-next-line no-alert
  Alert.alert(phrase);
};

//Components
const App = () => {
  const {viewStyle, imgStyle, textStyle, btn} = Style;
  return (
    <View style={viewStyle}>
      <Image source={require('./img/logo.png')} style={imgStyle} />
      <TouchableOpacity style={btn} onPress={generatePhrase}>
        <Text style={textStyle}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

//Render
AppRegistry.registerComponent('phrases', () => App);
