import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Fumi} from 'react-native-textinput-effects'
import LinearGradient from 'react-native-linear-gradient'
import { Header, Left, Right, Body, Button, Container, Content, Icon } from 'native-base'
import RoundContainer from '../components/RoundContainer'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import RoundCard from '../components/RoundCard'

class AdminProfile extends Component{
    render(){
        return (
            <Container>
                <Content padder>
                <RoundContainer text={'کنسلی وقت'} />
                <View style={styles.fumiContainer}>
                    <View style={styles.card}>
                    <View style={styles.fumiContainer}>
                <Fumi style={styles.fumiStyle} label={'شماره فاکتور'}
                    iconClass={FontAwesomeIcon}
                    iconName={'file-invoice'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <TouchableOpacity style={styles.buttonStyle}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4B97E5', '#6073F3']} style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                        <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 20, bottom: 4}}>کنسل</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
                    </View>
                </View>
                </Content>
            </Container>
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
    card: {
        top:0,
        borderColor:'#a3a39f',
        borderRadius: 8,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        shadowColor: 'black',
        shadowRadius: 10,
        elevation: 8,
    },
    fumiContainer: {
        marginRight: '2%',
        marginLeft: '2%',
    },
    fumiStyle: {
        height: 50,
        margin: '1%',
        backgroundColor: '#F7F8FA',
        borderRadius: 8
    },
    buttonStyle: {
        flexDirection: 'column',
        height: 50,
        margin: '1%',
        marginBottom: 20,
        alignItems: 'stretch',
        justifyContent: 'center',
    }
}

export default AdminProfile