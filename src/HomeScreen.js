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
  FlatList,
  Image
} from 'react-native';
import User from './User'
import styles from '../constants/styles'
import firebase from 'firebase'

class HomeScreen extends React.Component {
    static navigationOptions =({navigation})=> {
        return {
            title: 'Chats',
            headerStyle: {
                backgroundColor: 'green',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            headerRight: (
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Image source={require('./user.png')} style={{width: 32, height:32,marginRight: 7}}/>
                </TouchableOpacity>
            )
         }
        }

    state = {
        users: []
    } 
    currentUsers=()=>{
        let dbRef = firebase.database().ref('Users');
        dbRef.on('child_added', (val)=>{
            let person = val.val();
            person.phone = val.key;
            if(person.phone === User.phone){
                User.name = person.name
            }else {
            this.setState((prevState)=> {
                return {
                    users: [...prevState.users, person]
                }
            })
        }
        })
    }

    componentWillMount(){
      this.currentUsers();
    }

  renderRow = ({item}) => {
      return(
          <TouchableOpacity 
          style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:1}}
          onPress={()=>this.props.navigation.navigate('Chat', item)}>
              <Text style={{fontSize: 20}}>{item.name}</Text>
          </TouchableOpacity>
      )
  }
  render(){
    return (
      <SafeAreaView>
       <FlatList
        data={this.state.users}
        renderItem={this.renderRow}
        keyExtractor={(item)=> item.phone}
       />
      </SafeAreaView>
    )
  }
}
  

export default HomeScreen;
