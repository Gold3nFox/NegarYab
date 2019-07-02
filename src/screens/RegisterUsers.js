import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Fumi} from 'react-native-textinput-effects'
import LinearGradient from 'react-native-linear-gradient'
import { Header, Left, Right, Body, Button, Container, Content, Icon } from 'native-base'
import RoundContainer from '../components/RoundContainer'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import RoundCard from '../components/RoundCard'

class MainPage extends Component{
    render(){
        return (
            <Container>
                <Header style={{backgroundColor: '#294F8E'}} androidStatusBarColor={'#234278'}>
                    <Left>
                        <Button onPress={() => this.props.navigation.goBack()} transparent>
                            <Icon name='arrow-back' style={{fontSize: 35}} />
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent onPress={()=>{this.props.navigation.openDrawer();}}>
                            <Icon style={{fontSize: 35}} name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                <RoundContainer text={'ثبت کلاس'} />
                <View style={styles.fumiContainer}>
                <Fumi style={styles.fumiStyle} label={'نام درس'}
                    iconClass={FontAwesomeIcon}
                    iconName={'user-circle'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <Fumi style={styles.fumiStyle} label={'مکان تشکیل کلاس'}
                    iconClass={FontAwesomeIcon}
                    iconName={'map-marker'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <Fumi style={styles.fumiStyle} secureTextEntry={true} label={'رمز عبور'}
                    iconClass={FontAwesomeIcon}
                    iconName={'key'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <Fumi style={styles.fumiStyle} secureTextEntry={true} label={'تکرار رمز عبور'}
                    iconClass={FontAwesomeIcon}
                    iconName={'key'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <TouchableOpacity style={styles.buttonStyle}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4B97E5', '#6073F3']} style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                        <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 20, bottom: 4, fontFamily: 'iransans'}}>ثبت</Text>
                    </LinearGradient>
                </TouchableOpacity>
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
    fumiContainer: {
        marginRight: '5%',
        marginLeft: '5%',
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
        alignItems: 'stretch',
        justifyContent: 'center',
    }
}

export default MainPage