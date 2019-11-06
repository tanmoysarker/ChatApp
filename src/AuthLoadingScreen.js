import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import User from './User'
import firebase from 'firebase'

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }
  componentWillMount(){
    var config = {
        apiKey: "AIzaSyA5WzPxK4UXapU_f-Q9osTnmwUj-nV-a8E",
        authDomain: "chatapp-f3128.firebaseapp.com",
        databaseURL: "https://chatapp-f3128.firebaseio.com",
        projectId: "chatapp-f3128",
        storageBucket: "chatapp-f3128.appspot.com",
        messagingSenderId: "663018613655",
        appId: "1:663018613655:web:84eb678405659e2b8a72d2",
        measurementId: "G-CNQXLJCPWH"
      };
      // Initialize Firebase
      firebase.initializeApp(config);
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}