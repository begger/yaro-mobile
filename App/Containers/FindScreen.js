import React, { Component } from 'react'
import { ScrollView, Text, WebView, View } from 'react-native'
import { connect } from 'react-redux'
import { Header, Button } from './components/common';

// Styles
import styles from './Styles/FindScreenStyle'

class FindScreen extends Component {
  onPressHome() {
    this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'HomeScreen' }));
  }
  render () {
    return (
        <WebView
          source={{uri: 'https://maps.google.com/maps?q=Pharmacy&hl=en'}}
          style={{marginTop: 50}}
        />
      
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

export default connect(mapStateToProps, mapDispatchToProps)(FindScreen)
