import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Dimensions} from 'react-native'
import {Fumi} from 'react-native-textinput-effects'
import LinearGradient from 'react-native-linear-gradient'
import { Header, Left, Right, Body, Button, Container, Content, Icon, Card, Separator } from 'native-base'
import RoundContainer from '../components/RoundContainer'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import RoundCard from '../components/RoundCard'
import axios from 'axios'
import {APIDomainName} from '../../config'
import StylistInfo from '../components/StylistInfo'

class StylistManagementPage extends Component{
    constructor(props){
        super(props)
        this.state = {stylists: [], isEmpty: true}
    }
    componentDidMount(){
        let token = this.props.navigation.getParam('token')
        alert(token)
        axios.get(APIDomainName + 'arayeshgah/getStylists', {headers: {'Authorization': "bearer " + token}}).then(response => {
            if(response.data.length !== 0)
            alert(response.data);
            this.setState({stylists: response.data, isEmpty: false})
        })

    }
    render(){
        //let Boxes = <View></View>
        let Boxes = this.state.stylists[0] ? (this.state.stylists.map((stylist, index) => {
            return <StylistInfo key={index} {...stylist}></StylistInfo>
        })) : <View></View>
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
                {
                    Boxes
                }
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

export default StylistManagementPage