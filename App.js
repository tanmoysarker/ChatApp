import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/LoginScreen'
import HomeScreen from './src/HomeScreen'
import AuthLoadingScreen from './src/AuthLoadingScreen'
import ChatScreen from './src/ChatScreen'
import ProfileScreen from './src/PrefileScreen'

const AppStack = createStackNavigator({ Home: HomeScreen, Chat: ChatScreen, Profile: ProfileScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);