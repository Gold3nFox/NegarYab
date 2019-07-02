import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Dimensions, Animated} from 'react-native'
import { Header, Left, Right, Body, Button, Container, Content, Icon, Card, Separator } from 'native-base'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

class StylistInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {height: new Animated.Value(0), isOpen: false}
    }

    componentDidMount(){
        this.getHeight()
    }

    getHeight = () => {
        alert(this.div.clientHeight)
    }

    convertDayName = (englishName) => {
        let englishNames = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        let persianNames = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه']
        return persianNames[englishNames.indexOf(englishName)]
    }

    sortTimes = (times) => {
        let englishNames = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        return times.concat().sort((a, b) => englishNames.indexOf(a.Day) - englishNames.indexOf(b.Day))
    }

    changeState = () => {
        let {isOpen} = this.state
        if(isOpen) this.closeCard()
        else this.openCard()
    }


    openCard = () => {
        this.setState({isOpen: true})
        Animated.timing(this.state.height, {
            toValue: 300,
            duration: 1000,
        }).start()
    }

    closeCard = () => {
        Animated.timing(this.state.height, {
            toValue: 0,
            timing: 1000
        }).start(() => {this.setState({isOpen: false})})
    }

    render(){
        let sortedTimes = this.sortTimes(this.props.times)
        let days = sortedTimes.map((props, element) => {
            let {Day, ...otherProps} = props
            return <TimeSpan {...otherProps} Day={this.convertDayName(Day)} key={element} />
        })
        return (
            <Card style={{borderRadius: 3}}>
                <View style={{flexDirection: 'row-reverse'}}>
                    <View style={{flex: 0.5, flexDirection: 'row-reverse'}}>
                        <FontAwesomeIcon style={{marginHorizontal: '2%', color: 'blue'}} size={40} name="user"></FontAwesomeIcon>
                        <Text style={{fontFamily: 'iransans', alignSelf: 'center'}}>
                            {this.props.Name}
                        </Text>
                    </View>
                    <View style={{flex: 0.5, flexDirection: 'row', marginHorizontal: '2%'}}>
                        <Text style={{fontFamily: 'iransans', alignSelf: 'center'}}>
                                {this.props.Username}
                        </Text>
                    </View>
                </View>
                {
                    <Animated.View overflow={'hidden'} style={{height: this.state.height, marginVertical: 5}}>
                        <View style={{flexDirection: 'row-reverse'}}>
                            <Text style={{fontFamily: 'iransans', marginHorizontal: '2%'}}>
                            تایید ساعات کاری
                            </Text>
                        </View>
                        {days}
                    </Animated.View>
                }
                <Separator style={{height: 2, marginVertical: 5}}></Separator>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => {}} style={{flex: 1, height: Dimensions.get('window').height * 0.05, borderRadius: 5, flexDirection: 'row', justifyContent: 'center', marginHorizontal: 3, alignSelf: 'center'}}><Text style={{alignSelf: 'center', color: 'red', fontFamily: 'iransans'}}>حذف</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.changeState()}} style={{flex: 1, height: Dimensions.get('window').height * 0.05, borderRadius: 5, flexDirection: 'row', justifyContent: 'center', marginHorizontal: 3, alignSelf: 'center'}}><Text style={{alignSelf: 'center', fontFamily: 'iransans'}}>مشخصات</Text></TouchableOpacity>
                </View>
            </Card>
        )
    }
}

const TimeSpan = (props) => {
    return (
        <View style={{flexDirection: 'row-reverse', justifyContent: 'center', marginHorizontal: '20%', marginVertical: '1%', alignItems: 'center'}}>
            <Text style={{fontFamily: 'iransans', marginHorizontal: '2%', flex: 1}}>
                {props.Day}
            </Text>
            <Text style={{fontFamily: 'iransans', marginHorizontal: '2%'}}>
                {props.TimeStart}
            </Text>
            <Text style={{fontFamily: 'iransans', marginHorizontal: '2%'}}>
                الی
            </Text>
            <Text style={{fontFamily: 'iransans', marginHorizontal: '2%'}}>
                {props.TimeEnd}
            </Text>
            <Button style={{borderRadius: 10, height: Dimensions.get('window').height * 0.05, width: '25%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}><Text style={{fontFamily: 'iransans', color: 'white', alignSelf: 'center'}}>ارسال</Text></Button>
        </View>
    )
}

export default StylistInfo