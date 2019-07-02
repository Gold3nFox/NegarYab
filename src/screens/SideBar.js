import React, { Component } from 'react';
import { AppRegistry, Image,View, StatusBar, TouchableOpacity,Linking,Platform,AsyncStorage,Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import IconEvil from 'react-native-vector-icons/EvilIcons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  Text,
  Container,
  List,
  Separator,
  Content,
  Left,
  Body,
  Right
} from "native-base";
export default class SideBar extends React.Component {


  render() {
    return (
      <Container style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
        <View style={{flex:1}} >
        <View style={{flexDirection:'row',backgroundColor:'#294F8E',paddingBottom:20}}>
        <Text style={{color:'white',fontFamily:'iransans',flex:0.6,top:30,left:20,textAlign:'right',marginRight:30}}>حسن {"\n"} آرایشگاه هستی {"\n"} ۰۹۱۲۵۸۳۲۵۳۲</Text>
          <Image style={{flex:0.4,width:'30%',borderRadius:45,marginTop:20,alignSelf:'flex-end',marginRight:10,aspectRatio:1,height:null}} source={{uri:"https://icon2.kisspng.com/20180716/qax/kisspng-logo-person-user-person-icon-5b4d2bd1eadf26.611780081531784145962.jpg"}}/>  
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{flexDirection:'row',justifyContent: 'flex-end',height:60}}><Text style={{textAlign:'right',fontFamily:'iransans',height:60,alignSelf:'center',marginTop:30,fontSize:20}}>صفحه اصلی</Text><Icon style={{marginLeft:20,alignSelf:'center',marginRight:10,fontSize: 35, color: '#277FBF'}} name="home"></Icon></TouchableOpacity>
        <Separator style={{maxHeight:1,backgroundColor:'grey'}}>
          </Separator>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AdminProfile')} style={{flexDirection:'row',justifyContent: 'flex-end',height:60}}><Text style={{textAlign:'right',fontFamily:'iransans',height:60,alignSelf:'center',marginTop:30,fontSize:20}}>پروفایل کسب و کار</Text><Icon style={{marginLeft:20,alignSelf:'center',marginRight:10,fontSize: 35, color: '#277FBF'}} name="user"></Icon></TouchableOpacity>
        <Separator style={{maxHeight:1,backgroundColor:'grey'}}>
          </Separator>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterUsers')} style={{flexDirection:'row',justifyContent: 'flex-end',height:60}}><Text style={{textAlign:'right',fontFamily:'iransans',height:60,alignSelf:'center',marginTop:30,fontSize:20}}>ثبت نام کارکنان</Text><Icon style={{marginLeft:20,alignSelf:'center',marginRight:10,fontSize: 35, color: '#277FBF'}} name="pencil"></Icon></TouchableOpacity>
        <Separator style={{maxHeight:1,backgroundColor:'grey'}}>
          </Separator>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('StylistManagement')} style={{flexDirection:'row',justifyContent: 'flex-end',height:60}}><Text style={{textAlign:'right',fontFamily:'iransans',height:60,alignSelf:'center',marginTop:30,fontSize:20}}>مدیریت کارکنان</Text><IconFontAwesome style={{marginLeft:20,alignSelf:'center',marginRight:10,fontSize: 35, color: '#277FBF'}} name="users"></IconFontAwesome></TouchableOpacity>
        <Separator style={{maxHeight:1,backgroundColor:'grey'}}>
          </Separator>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('FinancialHandler')} style={{flexDirection:'row',justifyContent: 'flex-end',height:60}}><Text style={{textAlign:'right',fontFamily:'iransans',height:60,alignSelf:'center',marginTop:30,fontSize:20}}>مدیریت امور مالی</Text><Icon style={{marginLeft:20,alignSelf:'center',marginRight:10,fontSize: 35, color: '#277FBF'}} name="picture"></Icon></TouchableOpacity>
        <Separator style={{maxHeight:1,backgroundColor:'grey'}}>
          </Separator>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ReserveHandler')} style={{flexDirection:'row',justifyContent: 'flex-end',height:60}}><Text style={{textAlign:'right',fontFamily:'iransans',height:60,alignSelf:'center',marginTop:30,fontSize:20}}>مدیریت رزرو وقت</Text><Icon style={{marginLeft:20,alignSelf:'center',marginRight:10,fontSize: 35, color: '#277FBF'}} name="calendar"></Icon></TouchableOpacity>
        <Separator style={{maxHeight:1,backgroundColor:'grey'}}>
          </Separator>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{flexDirection:'row',justifyContent: 'flex-end',height:60}}><Text style={{textAlign:'right',fontFamily:'iransans',height:60,alignSelf:'center',marginTop:30,fontSize:20}}>نظرات کاربران</Text><IconEvil style={{marginLeft:20,alignSelf:'center',marginRight:10,fontSize: 35, color: '#277FBF'}} name="comment"></IconEvil></TouchableOpacity>
        <Separator style={{maxHeight:1,backgroundColor:'grey'}}>
          </Separator>
        </View>
      </Container>
    );
  }
}