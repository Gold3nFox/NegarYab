import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { Header, Left, Right, Body, Button, Container } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconEvil from 'react-native-vector-icons/EvilIcons'

class RoundCard extends Component{
    render(){
        if(this.props.iconGroup === 'FontAwesome'){
            return (
            <TouchableOpacity onPress={this.props.onPress} style={{width: '40%', borderRadius: 10, backgroundColor: '#ECEFF4', aspectRatio: 1, margin: '2%', marginBottom: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                <IconFontAwesome name={this.props.iconName} style={{fontSize: 60, color: '#277FBF'}}></IconFontAwesome>
                <Text style={{fontSize: 15, color: '#ACB6C0', marginTop: '10%', fontFamily: 'iransans'}}>{this.props.text}</Text>
            </TouchableOpacity>
            )
        }
        else if(this.props.iconGroup === 'EvilIcons'){
            return(
            <TouchableOpacity onPress={this.props.onPress} style={{width: '40%', borderRadius: 10, backgroundColor: '#ECEFF4', aspectRatio: 1, margin: '2%', marginBottom: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                <IconEvil name={this.props.iconName} style={{fontSize: 60, color: '#277FBF'}}></IconEvil>
                <Text style={{fontSize: 15, color: '#ACB6C0', marginTop: '10%', fontFamily: 'iransans'}}>{this.props.text}</Text>
            </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{width: '40%', borderRadius: 10, backgroundColor: '#ECEFF4', aspectRatio: 1, margin: '2%', marginBottom: 0, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                <Icon name={this.props.iconName} style={{fontSize: 60, color: '#277FBF'}}></Icon>
                <Text style={{fontSize: 15, color: '#ACB6C0', marginTop: '10%', fontFamily: 'iransans'}}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export default RoundCard