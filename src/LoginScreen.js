import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Alert
} from 'react-native';
import User from './User'
import styles from '../constants/styles'
import firebase from 'firebase'


class LoginScreen extends React.Component {
  static navigationOptions = {
      header: null
  }
  state = {
    phone: '',
    name: ''
  }
  
  handleChange = key => val => {
    this.setState({ [key]: val })
  }

//   componentWillMount(){
//     AsyncStorage.getItem('userPhone').then(val =>{
//       if(val){
//         this.setState({phone: val})
//       }
//     })
//   }

  submitForm =async()=> {
    if(this.state.phone.length < 11){
      Alert.alert('Invalid phone number')
    }else if(this.state.name.length < 3){
      Alert.alert('Choose a different name')
    }else {
      await AsyncStorage.setItem('userPhone',this.state.phone)
      User.phone = this.state.phone;
      firebase.database().ref('Users/' + User.phone).set({name:this.state.name})
      this.props.navigation.navigate('App');
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Phone Number"
          keyboardType="number-pad"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleChange('phone')}
        />
         <TextInput
          placeholder="Name"
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />
        <TouchableOpacity onPress={this.submitForm}>
           <Text style={styles.btnText}>Enter</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LoginScreen;
