import { StackNavigator } from 'react-navigation'
import ResultsScreen from '../Containers/ResultsScreen'
import FindScreen from '../Containers/FindScreen'
import ChatScreen from '../Containers/ChatScreen'
import HomeScreen from '../Containers/HomeScreen'
import PaymentScreen from '../Containers/PaymentScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ResultsScreen: { screen: ResultsScreen },
  FindScreen: { screen: FindScreen },
  ChatScreen: { screen: ChatScreen },
  HomeScreen: { screen: HomeScreen },
  PaymentScreen: { screen: PaymentScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
