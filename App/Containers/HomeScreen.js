import React, { Component } from 'react'
import { ScrollView, Text, View, Modal, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import firebase from 'firebase';
import { Header, Button } from './components/common';
import { NavigationActions } from 'react-navigation'
import { Col, Row, Grid } from "react-native-easy-grid";

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {

  state = {
    modalVisible: false,
  }

  onButtonPress(route) {
    this.props.navigation.dispatch(NavigationActions.navigate({ routeName: route }));
  }

  logout() {
    firebase.auth().signOut();
    this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'LoginScreen' }));
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render () {
    return (
      <View style={{paddingTop: 50}}>
        <View style={{marginBottom: 50}}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>This is a notification from the database</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{paddingTop: 50}}>Exit Messages</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>You have message(s)</Text>
          </TouchableHighlight>
        </View>
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
