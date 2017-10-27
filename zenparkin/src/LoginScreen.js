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

import HomeScreen from './HomeScreen';

const MyLoginScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Zenparkin
        </Text>
        <Text style={styles.instructions}>
            Your neighbourhood parking app
        </Text>
        <TouchableHighlight onPress={() => navigation.navigate('HomeScreen', { user: 'Janey' })}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
            </View>
        </TouchableHighlight>
    </View>
);

const LoginScreen = StackNavigator({
    Login: { 
        screen: MyLoginScreen 
    },
    HomeScreen: { 
        screen: HomeScreen 
    },
});

export default LoginScreen;

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