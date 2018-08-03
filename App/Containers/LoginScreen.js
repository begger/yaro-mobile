import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, LoginForm, Button, Spinner } from './components/common';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  state: State = {
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
      switch (loggedIn) {
          case true:
              return (
                  <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
              )
          case false:
              return <LoginForm />;
          default:
              return <Spinner size="large" />;
      }
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

export default LoginScreen
