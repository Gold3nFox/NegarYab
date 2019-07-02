import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Fumi} from 'react-native-textinput-effects'
import LinearGradient from 'react-native-linear-gradient'
import { Header, Left, Right, Body, Button, Container, Content, Icon } from 'native-base'
import RoundContainer from '../components/RoundContainer'
import FontAwesomeIcon from 'react-native-vector-icons/EvilIcons'
import RoundCard from '../components/RoundCard'
import DatePicker from 'react-native-datepicker';


class AdminProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
           date:''
};

}
 
    show(){
        Picker.init({
        pickerData: data,
        selectedValue: [59],
        onPickerConfirm: data => {
            console.log(data);
        },
        onPickerCancel: data => {
            console.log(data);
        },
        onPickerSelect: data => {
            console.log(data);
        }
    });
    Picker.show();
        
    }

    render(){
        var locale = 'en';
        return (
            <Container>
            <Content padder>
            <RoundContainer text={'مدیریت رزرو وقت'} />
            <View style={styles.fumiContainer}>
                <View style={styles.card}>
                <View style={styles.fumiContainer}>
                    <Fumi style={styles.fumiStyle} label={'نام خدمت دهنده'}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={'#f95a25'}
                        iconSize={30}
                        height={100}
                    />
                     <DatePicker
                    style={styles.datepicker}
                    date={this.state.date}
                    mode="date"
                    locale={locale}
                    format="MMMM Do"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        right: 20,
                        width:25,
                        height:25,
                        top: 4,
                        marginRight: 0,
                        },
                        dateInput: {
                        marginRight: 36
                        }
                    }}
                    minuteInterval={10}
                    onDateChange={(date) => { this.props.onDateChange && this.props.onDateChange(date);this.setState({ date }); }}
            />
                    <TouchableOpacity style={styles.buttonStyle}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4B97E5', '#6073F3']} style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                            <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 20, bottom: 4}}>جستجو</Text>
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
        backgroundColor:'white',
        shadowColor: 'black',
        shadowRadius: 10,
        elevation: 8,
        outlineProvided : 'bounds',
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
    datepicker: {
        width:'100%',
        alignSelf: 'center',
        justifyContent:'center',
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