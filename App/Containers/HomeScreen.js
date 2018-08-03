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

  render () {
    return (
      <View>
        <Header 
          headerText="Home"
        />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Grid>
              <Row>
                <Button onPress={() => this.onButtonPress('ResultsScreen')}>View Results</Button>
              </Row>
              <Row>
                <Button onPress={() => this.onButtonPress('PaymentScreen')}>Pay for Results</Button>
              </Row>
              <Row>
                <Button onPress={() => this.onButtonPress('ChatScreen')}>Chat with Doctor</Button>
              </Row>
              <Row>
                <Button onPress={() => this.onButtonPress('FindScreen')}>Find Pharmacy</Button>
              </Row>
              <Row>
                <Button onPress={() => this.onButtonPress('LoginScreen')}>Logout</Button>
              </Row>
            </Grid>
          </View>
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
