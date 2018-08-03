import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import firebase from 'firebase';
import { Header, Button } from './components/common';
import { NavigationActions } from 'react-navigation'
import { Col, Row, Grid } from "react-native-easy-grid";

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {

  onButtonPress(route) {
    this.props.navigation.dispatch(NavigationActions.navigate({ routeName: route }));
  }

  logout() {
    firebase.auth().signOut();
    this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'LoginScreen' }));
  }

  render () {
    return (
      <View style={{paddingTop: 50}}>
        <ScrollView>
          <Button onPress={() => this.onButtonPress('ResultsScreen')}>View Results</Button>
          <Button onPress={() => this.onButtonPress('PaymentScreen')}>Pay for Results</Button>
          <Button onPress={() => this.onButtonPress('ChatScreen')}>Chat with Doctor</Button>
          <Button onPress={() => this.onButtonPress('FindScreen')}>Find Pharmacy</Button>
          <Button onPress={() => this.logout()}>Logout</Button>
        </ScrollView>
      </View>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
