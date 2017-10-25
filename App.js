/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends Component<{}> {

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyCMX93bAzWqHFy4LgKfV-5sTn4_vNfXNKo",
    authDomain: "auth-1ae26.firebaseapp.com",
    databaseURL: "https://auth-1ae26.firebaseio.com",
    projectId: "auth-1ae26",
    storageBucket: "auth-1ae26.appspot.com",
    messagingSenderId: "950341292094"
  })
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header headerText='AuthorIzation'/>
        <LoginForm />
      </View>
    );
  }
};
