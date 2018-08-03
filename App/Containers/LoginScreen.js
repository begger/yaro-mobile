import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import firebase from 'firebase';
import { connect } from 'react-redux'
import { View } from 'react-native';
import { Header, LoginForm, Button, Spinner } from './components/common';
import { NavigationActions } from 'react-navigation'

import styles from './Styles/LoginScreenStyle'


class LoginScreen extends Component {
  state = {
    loggedIn: null
  }
  componentWillMount() {
      const config = {
        apiKey: "AIzaSyBi-I2to6rg6nm5MCSZWX86pV6b_xhKCkI",
        authDomain: "yaro-demo.firebaseapp.com",
        databaseURL: "https://yaro-demo.firebaseio.com",
        projectId: "yaro-demo",
        storageBucket: "yaro-demo.appspot.com",
        messagingSenderId: "446200296756"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged((user) => {
          this.setState({ loggedIn: user ? true : false });
      });
  }
  renderContent = () => {
    const { loggedIn } = this.state;
    if(loggedIn) 
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'HomeScreen' }));
    else if(!loggedIn)
      return <LoginForm />;
    else              
      return <Spinner size="large" />;
      
  }
  render() {
      return (
          <View>
              <Header 
                  headerText="Login"
              />
              {this.renderContent()}
          </View>
      );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
