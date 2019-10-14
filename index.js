//Imports
import React from 'react';
import {AppRegistry, View, TouchableOpacity, Text} from 'react-native';

//Format

const Style = {
  viewStyle: {
    paddingTop: 40,
    margin: 20,
  },
  btn: {
    backgroundColor: '#d1a',
    borderColor: '#91a',
    borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
};

const press = () => {
  // eslint-disable-next-line no-alert
  alert('Pressionado!');
}

//Components
const App = () => {
  const {viewStyle, btn, btnText} = Style;
  return (
    <View style={viewStyle}>
      <TouchableOpacity style={btn}>
        <Text style={btnText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

//Render
AppRegistry.registerComponent('phrases', () => App);
