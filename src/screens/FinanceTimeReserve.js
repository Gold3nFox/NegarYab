import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Fumi} from 'react-native-textinput-effects'
import LinearGradient from 'react-native-linear-gradient'
import { Header, Left, Right, Body, Button, Container, Content, Icon,ListItem,Radio,Picker } from 'native-base'
import RoundContainer from '../components/RoundContainer'
import FontAwesomeIcon from 'react-native-vector-icons/EvilIcons'
import RoundCard from '../components/RoundCard'
import DatePicker from 'react-native-datepicker';


class AdminProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
           date:'',
           selected2:'key0',
};

}


onValueChange2(value) {
    this.setState({
      selected2: value
    });

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
            <RoundContainer text={'فاکتورهای رزرو من'} />
            <View style={styles.fumiContainer}>
                <View style={styles.card}>
                <View style={styles.fumiContainer}>
                <ListItem noBorder style={styles.pickerstyle} picker>
              <Picker  
              note
                iosIcon={<Icon name="person" style={{marginRight:0,color:"rgba(105,105,105,1)",fontSize:30}} />}
                style={{height: 50,width: "100%",justifyContent: 'flex-end',}}
                textStyle={{fontFamily: 'iransans',
                paddingRight:12,textAlign:'right',color:"rgba(105,105,105,1)"}}
                headerStyle={{backgroundColor: '#294F8E'}}
                headerBackButtonText={"بازگشت"}
                iosHeader={" "}
                itemStyle={{direction:'rtl',height:50,marginBottom:5}}
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="مهم نیست..." value="key0" />
                <Picker.Item label="آرش" value="key1" />
                <Picker.Item label="بهنام" value="key2" />
              </Picker>
            </ListItem>
                   
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:0.5,flexDirection:'row',margin:'1%',backgroundColor:'#F7F8FA',borderRadius:8}}>
                     <DatePicker
                    style={styles.datepicker}
                    date={this.state.date}
                    mode="date"
                    locale={locale}
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        right: 2000
                        }
                    }}
                    minuteInterval={10}
                    onDateChange={(date) => { this.props.onDateChange && this.props.onDateChange(date);this.setState({ date }); }}
            />
            <Text style={{alignSelf:'center'}}>تا تاریخ :</Text>
            </View>
            <View style={{flex:0.5,flexDirection:'row',margin:'1%',backgroundColor:'#F7F8FA',borderRadius:8}}>
             <DatePicker
                    style={styles.datepicker}
                    date={this.state.date}
                    mode="date"
                    locale={locale}
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        right: 2000
                        }
                    }}
                    minuteInterval={10}
                    onDateChange={(date) => { this.props.onDateChange && this.props.onDateChange(date);this.setState({ date }); }}
            />
            <Text style={{alignSelf:'center'}}>از تاریخ :</Text>
            </View>
            </View>
            <Fumi style={styles.fumiStyle} label={'شماره فاکتور'}
                        iconClass={FontAwesomeIcon}
                        iconName={'credit-card'}
                        iconColor={'#f95a25'}
                        iconSize={30}
                        height={100}
                    />
            <ListItem noBorder style={styles.pickerstyle}>
                <TouchableOpacity style={{flex:0.5,flexDirection:'row',margin: '1%',
        backgroundColor: '#F7F8FA',
        borderRadius: 8,height:50}} onPress={()=>{
            this.setState({radio2:!this.state.radio2})}}>
                <Left style={{flex:0.2,marginLeft:15}}>
                <Radio style={{alignSelf:'center'}} selected={this.state.radio2} />
                </Left>
                <Right style={{flex:0.8,flexDirection:'row',justifyContent:'flex-end'}}>
                <Text style={{fontFamily: 'iransans',
                color:"rgba(105,105,105,1)",marginRight:10}}>استفاده شده</Text>
                
                </Right>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:0.5,flexDirection:'row',margin: '1%',marginRight:-15,
        backgroundColor: '#F7F8FA',
        borderRadius: 8,height:50}} onPress={()=>{
            this.setState({radio:!this.state.radio})}}>
                <Left style={{flex:0.2,marginLeft:15}}>
                <Radio style={{alignSelf:'center'}} selected={this.state.radio} />
                </Left>
                <Right style={{flex:0.8,flexDirection:'row',justifyContent:'flex-end'}}>
                <Text style={{fontFamily: 'iransans',
                color:"rgba(105,105,105,1)",marginRight:10}}>موجود</Text>
                </Right>
                </TouchableOpacity>
            </ListItem>
    
            
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
        flex:0.9,
        alignSelf: 'center',
        justifyContent:'center',
        height: 50,
        margin:'1%',backgroundColor:'#F7F8FA',borderRadius:8
    },
    buttonStyle: {
        flexDirection: 'column',
        height: 50,
        margin: '1%',
        marginBottom: 20,
        alignItems: 'stretch',
        justifyContent: 'center',
    },pickerstyle: {
        height: 50,
        flexDirection:'row',
        margin: '1%',
        borderRadius: 8,
        marginLeft:0,
    },
}

export default AdminProfile