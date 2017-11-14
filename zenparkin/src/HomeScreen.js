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
var MapView = require('react-native-maps');

console.log('inside home screen');

export default class HomeScreen extends React.Component {
  constructor(props) {
    console.log("in constructor");
    super(props);
    this.state = {
      region: {
        latitude: 17.6868,
        longitude: 83.2185,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },
      markers: [],
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const { params } = this.props.navigation.state;
    var username = params.user.name.split(' ')[0].trim();
    console.log("*** username = ", username);
    console.log("*** region = ", this.state.region);

    return (
      <View style={styles.content}>		
        <MapView
          region={this.state.region}
        />
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