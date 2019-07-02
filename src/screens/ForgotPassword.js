import React, {Component} from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { Fumi } from 'react-native-textinput-effects'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

class ForgotPassword extends Component{
    constructor(props){
        super(props)
        this.state = {username: '', password: ''}
    }

    sendInformationToServer = () => {
        //TODO: SendInfo
    }

    render(){
        return (
            <View style={styles.containerStyle}>
            <LinearGradient colors={['#D651A0', '#9574CB']} style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
                <View style={styles.fumiContainer}>
                <Fumi style={styles.fumiStyle} onChangeText={(username) => this.setState({username})} label={'نام کاربری'}
                    iconClass={FontAwesomeIcon}
                    iconName={'phone'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <TouchableOpacity onPress={() => {alert(this.state.username)}} style={styles.buttonStyle}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F47264', '#FF4F8C']} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 20, bottom: 4, fontFamily: 'iransans'}}>ورود</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </LinearGradient>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    fumiContainer: {
        marginRight: '10%',
        marginLeft: '10%'
    },
    fumiStyle: {
        height: 50,
        margin: '1%',
    },
    buttonStyle: {
        flexDirection: 'column',
        height: 50,
        margin: '1%',
        alignItems: 'stretch',
        justifyContent: 'center',
    }
}

export default ForgotPassword