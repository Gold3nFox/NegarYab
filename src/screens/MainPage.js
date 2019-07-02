import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { Header, Left, Right, Body, Button, Icon, Container, Content } from 'native-base'
import RoundContainer from '../components/RoundContainer'
import RoundCard from '../components/RoundCard'

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state = {token: ''}
    }
    componentWillMount(){
        let token = this.props.navigation.getParam('token')
        // if(!token) this.props.navigation.navigate('LoginPage')
        this.setState({token})
    }
    render(){
        return (
            <Container>
                <Header style={{backgroundColor: '#294F8E'}} androidStatusBarColor={'#234278'}>
                    <Right>
                        <Button transparent onPress={()=>{this.props.navigation.openDrawer();}}>
                            <Icon style={{fontSize: 35}} name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                <RoundContainer text={'پنل مدیریت'} />
                <View style={{flexDirection: 'row', height: '27%', marginTop: '3%', justifyContent: 'center', alignItems: 'center'}}>
                    <RoundCard onPress={() => this.props.navigation.navigate('RegisterUsers')} iconName={'pencil'} text={'ثبت کلاس'}></RoundCard>
                    <RoundCard onPress={() => this.props.navigation.navigate('AdminProfile')} iconName={'user'} text={'پروفایل استاد'} ></RoundCard>
                </View>
                <View style={{flexDirection: 'row', height: '27%', marginTop: '3%', justifyContent: 'center', alignItems: 'center'}}>
                    <RoundCard onPress={() => this.props.navigation.navigate('FinancialHandler')} iconName={'picture'} text={'مدیریت امور مالی'}></RoundCard>
                    <RoundCard onPress={() => this.props.navigation.navigate('StylistManagement', {token: this.state.token})} iconGroup={'FontAwesome'} iconName={'users'} text={'مدیریت کارکنان'}></RoundCard>
                </View>
                <View style={{flexDirection: 'row', height: '27%', marginTop: '3%', justifyContent: 'center', alignItems: 'center'}}>
                    <RoundCard iconGroup={'EvilIcons'} iconName={'comment'} text={'نظرات كاربران'}></RoundCard>
                    <RoundCard onPress={() => this.props.navigation.navigate('ReserveHandler')} iconName={'calendar'} text ={'مدیریت رزرو وقت'}></RoundCard>
                </View>
                </Content>
            </Container>
        )
    }
}

export default MainPage