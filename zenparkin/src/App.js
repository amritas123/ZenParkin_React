/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

import LoginScreen from './LoginScreen';

const ExampleRoutes = {
  LoginScreen: {
    name: 'Login',
    description: 'Login screen for zenparkin',
    screen: LoginScreen,
  },
};

const AppNavigator = StackNavigator(
  {
    ...ExampleRoutes,
    Index: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
  }
);

export default () => <AppNavigator />;