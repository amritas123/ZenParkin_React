import React, { Component } from 'react';
import {
  Alert,
  Button,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

console.log('inside home screen');

export default class HomeScreen extends React.Component {

  render() {
    const { params } = this.props.navigation.state;
    var username = params.user.name.split(' ')[0].trim();
    console.log("*** username = ", username);
    return (
      <View style={styles.content}>		
        <Text style={styles.header}>
          Welcome {username}!
        </Text>
        <View style={styles.avatar}>
          <Image source={{ uri: params.user.avatar }} style={styles.avatarImage} />
        </View>
      </View>
    );
  }
}

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
  },
  content: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    avatar: {
      margin: 20,
    },
    avatarImage: {
      borderRadius: 50,
      height: 100,
      width: 100,
    },
    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    text: {
      textAlign: 'center',
      color: '#333',
      marginBottom: 5,
    },
    buttons: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 20,
      marginBottom: 30,
    },
});