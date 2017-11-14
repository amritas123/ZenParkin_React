import React, { Component } from 'react';
import {
  Alert,
  Button,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafariView from 'react-native-safari-view';

import HomeScreen from './HomeScreen';

class MyLoginScreen extends React.Component {
    state = {
        user: undefined, // user has not logged in yet
    };
    
    // Set up Linking
    componentDidMount() {
        // Add event listener to handle OAuthLogin:// URLs
        Linking.addEventListener('url', this.handleOpenURL);
        
        // Launched from an external URL
        Linking.getInitialURL().then((url) => {
            if (url) {
            this.handleOpenURL({ url });
            }
        });
    };
    
    componentWillUnmount() {
        // Remove event listener
        Linking.removeEventListener('url', this.handleOpenURL);
    };

    handleOpenURL = ({ url }) => {
        // Extract stringified user string out of the URL
        console.log("#### url = ", url);
        const [, user_string] = url.match(/user=([^#]+)/);
        this.setState({
            // Decode the user string and parse it into JSON
            user: JSON.parse(decodeURI(user_string))
        });
        if (Platform.OS === 'ios') {
            console.log("****** safari dismissed ****")
            SafariView.dismiss();
        }
    };
    
    // Handle Login with Facebook button tap
    loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');

    // Handle Login with Google button tap
    loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

    // Open URL in a browser
    openURL = (url) => {
        // Use SafariView on iOS
        if (Platform.OS === 'ios') {
            console.log("** ios url ** = ", url);
            SafariView.show({
            url: url,
            fromBottom: true,
            });
        }
        // Or Linking.openURL on Android
        else {
            console.log("** android url ** = ", url);
            Linking.openURL(url);
        }
    };
    
    render() {
        const { navigate } = this.props.navigation;
        const { user } = this.state;
        console.log("%%% user = ", user);
        return (
          <View style={styles.container}>
            { user
              ? // Show user info if already logged in
              //navigate('HomeScreen',{ user: user })
              <TouchableOpacity onLayout={() => {navigate('HomeScreen',{ user: user })} } />
              : // Show Please log in message if not
                <View style={styles.content}>
                  <Text style={styles.header}>
                    Zenparkin!
                  </Text>
                  <Text style={styles.text}>
                    Please log in to continue {'\n'}
                    to the awesomness
                  </Text>
                </View>
            }
            <View style={styles.otp}>
              <Text style={styles.text_otp}>
                Signin using OTP
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text})}
                placeholder="+1 650-761-2184"
              />
              <Icon.Button
                name="chevron-right"
                size={15}
                backgroundColor="#3b5998"
                onPress={this.loginWithFacebook}
                {...iconStyles}
              >
              </Icon.Button>
            </View>
            {/* Login buttons */}
            <View style={styles.buttons}>
              <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={this.loginWithFacebook}
                {...iconStyles}
              >
                Facebook
              </Icon.Button>
              <Icon.Button
                name="google"
                backgroundColor="#DD4B39"
                onPress={this.loginWithGoogle}
                {...iconStyles}
              >
                Google
              </Icon.Button>
            </View>
          </View>
        );
    }
}

const LoginScreen = StackNavigator({
    Login: { 
        screen: MyLoginScreen 
    },
    HomeScreen: { 
        screen: HomeScreen 
    },
});

export default LoginScreen;

const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'powderblue',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
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
    input: {
      textAlign: 'center',
      borderColor: 'gray', 
      borderWidth: 1,
      height: 40,
    },
    otp: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      height: 100,
    },
    text_otp: {
      flexDirection: 'row',
      textAlign: 'center',
      color: '#333',
      marginBottom: 5,
    },
});