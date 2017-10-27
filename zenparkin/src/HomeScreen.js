import React, { Component } from 'react';
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

console.log('inside home screen');

const HomeScreen = ({ navigation }) => (
    <View>
        <Text>Chat with {navigation.state.params.user}</Text>
    </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'powderblue',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 20,
    },
    button: {
      width: 200,
      alignItems: 'center',
      backgroundColor: '#ed42d0',
      borderRadius: 5,
    },
    buttonText: {
      padding: 20,
      fontSize: 20,
      color: 'white'
    }
});