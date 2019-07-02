import React, {Component} from 'react'
import {View,Image,Dimensions, Text, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Header, Left, Right, Body, Button, Container, Content, Icon, Card, CardItem } from 'native-base'
import RoundContainer from '../components/RoundContainer'
import ImagePicker from 'react-native-image-crop-picker';

class AdminProfile extends Component{
    constructor(props){
        super(props);
        this.state = {path: ''};
    }
    
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
                <RoundContainer text={'پروفایل کسب و کار'} />
                <View style={styles.fumiContainer}>
                <TouchableOpacity  onPress={()=>{
                ImagePicker.openPicker({
                    width: 300,
                    height: 300,
                    cropping: true
                    }).then(image => {
                    this.setState({path:image.path});
                    });
                    }}>
                <Image source={{uri:"https://image.ibb.co/dFAbJA/photo-2018-10-24-12-10-56.jpg"}}  style={{width:'40%',aspectRatio:1,alignSelf:'center',marginBottom:5}}/>  
                <Image source={{uri:this.state.path}}  style={{width:'40%',marginTop:-(Dimensions.get('window').width*2/5)+20,aspectRatio:1,alignSelf:'center',marginBottom:5,borderRadius:Dimensions.get('window').width*1/6}}/>
                </TouchableOpacity>

                <CardItem style={{alignItems:'center',justifyContent: 'center',}}>
                    <Body style={{flexDirection:'column',alignSelf:'center'}}>
                        <Text style={{marginBottom:30,fontWeight:'bold',textAlign: 'center' ,alignSelf:'center',width:'100%'}}>استاد بهادر بخشی</Text>
                    </Body>
                </CardItem>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('EditDetails')}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4B97E5', '#6073F3']} style={{flex: 1,marginBottom:5, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                        <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 20, bottom: 4}}>ویرایش اطلاعات</Text>
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

export default AdminProfile