import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import { Header, Left, Right, Body, Button, Icon, Container } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

class RoundContaier extends Component{
    render(){
        return (
            <View style={{borderRadius: 15, margin: 4}} >
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#607EF0', '#4599FB']} style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', borderRadius: 15}}>
                        <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 20, paddingTop: 5, paddingBottom: 4, paddingRight: 10, fontFamily: 'iransans'}}>{this.props.text}</Text>
                </LinearGradient>
            </View>
        )
    }
}

export default RoundContaier