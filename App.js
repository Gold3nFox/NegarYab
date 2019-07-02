import React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import MainPage from './src/screens/MainPage'
import RegisterUsers from './src/screens/RegisterUsers'
import AdminProfile from './src/screens/AdminProfile'
import ReserveHandler from './src/screens/ReserveHandler'
import EditDetails from './src/screens/EditDetails'
import StylistManagement from './src/screens/StylistManagement'
import LoginScreen from './src/screens/LoginScreen'
import FinancialHandler from './src/screens/FinancialHandler'
import SideBar from './src/screens/SideBar'

const StackNavigator =  DrawerNavigator({
  Home: {
    screen: MainPage
  },
  LoginPage: {
    screen: LoginScreen
  },
  RegisterUsers: {
    screen: RegisterUsers
  },
  AdminProfile: {
    screen: AdminProfile
  },
  ReserveHandler: {
    screen: ReserveHandler
  },
  EditDetails: {
    screen: EditDetails
  },
  StylistManagement: {
    screen: StylistManagement
  },
  FinancialHandler:{
    screen: FinancialHandler
  }
}, {initialRouteName: 'LoginPage', headerMode: 'none',drawerPosition : 'right',contentComponent: props => <SideBar {...props} />,},
  );


export default class App extends React.Component{
  render(){
    return <StackNavigator />
  }
}
