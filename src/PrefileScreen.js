import React from 'react'
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
    FlatList,
    Dimensions,
    Alert
  } from 'react-native';
  import User from './User';
  import styles from '../constants/styles'
  import firebase from 'firebase'

export class PrefileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }
    state = {
        name: User.name
    }
    handleChange = key => val => {
        this.setState({[key]: val})
    }
    changeName = async() => {
        if(this.state.name.length < 3){
            alert.alert('Please Enter a valid name')
        }else if(User.name !== this.state.name){
            firebase.database().ref('Users').child(User.phone).set({name: this.state.name});
            User.name = this.state.name;
            Alert.alert('Name Changed')
        }
    }
    _logout = async() => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      }
    render() {
        return (
           <SafeAreaView style={styles.container}>
               <Text style={{fontSize:20}}>
                {User.phone}
               </Text>
               <Text style={{fontSize:20}}>
                {User.name}
               </Text>
               <TextInput
                style={styles.input}
                value= {this.state.name}
                onChangeText={this.handleChange('name')}
               />
               <TouchableOpacity onPress={this.changeName}>
                   <Text style={styles.btnText}>Change Name</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={this._logout}>
                   <Text style={styles.btnText}>Logout</Text>
               </TouchableOpacity>
           </SafeAreaView>
        )
    }
}

export default PrefileScreen
