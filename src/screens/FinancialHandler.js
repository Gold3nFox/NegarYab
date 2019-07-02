import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Fumi} from 'react-native-textinput-effects';
import LinearGradient from 'react-native-linear-gradient';
import { Header, Tabs,Tab, Left, Right, Body, Button, Container, Content, Icon } from 'native-base'
import RoundContainer from '../components/RoundContainer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RoundCard from '../components/RoundCard';
import Tab1 from './FinanceTimeReserve';
import Tab2 from './Discount';


class ReserveHandler extends Component{

    render(){
        return (
            <Container>
                <Header hasTabs style={{backgroundColor: '#294F8E'}} androidStatusBarColor={'#234278'}>
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
                <Tabs>
                <Tab heading="رزرو وقت">
                    <Tab1 />
                </Tab>
                <Tab heading="تخفیف">
                <Tab2 />
                </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default ReserveHandler;