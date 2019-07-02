import React, {Component} from 'react'
import {View, Text, TouchableOpacity,Image,Dimensions,StyleSheet, Geolocation} from 'react-native'
import {Fumi} from 'react-native-textinput-effects'
import LinearGradient from 'react-native-linear-gradient'
import { Header, Left, Right, Body, Button, Container, Content,ListItem,Radio, Icon , Root ,Picker,Form,Item} from 'native-base'
import RoundContainer from '../components/RoundContainer'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import RoundCard from '../components/RoundCard'
import ImagePicker from 'react-native-image-crop-picker';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class EditDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: {},
            selected2: "key0",
            selected:"key0",
};

}

onValueChange2(value) {
    this.setState({
      selected2: value
    });

}

onValueChange(value) {
    this.setState({
      selected: value
    });

}

    render(){
        return (
            <Root>
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
                <RoundContainer text={'پروفایل کسب و کار - (ویرایش)'} />
                <View style={styles.fumiContainer}>
                <Fumi style={styles.fumiStyle} label={'نام استاد'}
                    iconClass={FontAwesomeIcon}
                    iconName={'user-circle'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <Fumi style={styles.fumiStyle} label={'آدرس'}
                    iconClass={FontAwesomeIcon}
                    iconName={'map-marker'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <Fumi style={styles.fumiStyle} label={'تلفن ثابت'}
                    iconClass={FontAwesomeIcon}
                    iconName={'phone'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <Fumi style={styles.fumiStyle} label={'تلفن همراه'}
                    iconClass={FontAwesomeIcon}
                    iconName={'mobile'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <Fumi style={styles.fumiStyle} label={'مودل'}
                    iconClass={FontAwesomeIcon}
                    iconName={'bullseye'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
                <Fumi style={styles.fumiStyle} label={'تلگرام'}
                    iconClass={FontAwesomeIcon}
                    iconName={'telegram'}
                    iconColor={'#f95a25'}
                    iconSize={30}
                    height={100}
                />
               

            <ListItem noBorder style={styles.pickerstyle} picker>
                <Picker
                note
                    iosIcon={<Icon name="leaf" style={{marginRight:0,color:"rgba(105,105,105,1)",fontSize:30}} />}
                    style={{ height: 50,
                        backgroundColor: '#F7F8FA',
                        borderRadius: 8,width:'100%',justifyContent: 'flex-end',}}
                    textStyle={{fontFamily: 'iransans',
                    paddingRight:12,textAlign:'center',color:"rgba(105,105,105,1)"}}
                    headerStyle={{backgroundColor: '#294F8E'}}
                    headerBackButtonText={"بازگشت"}
                    iosHeader={" "}
                    itemStyle={{direction:'rtl',height:50,marginBottom:5}}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                >
                    <Picker.Item label="استاد تمام" value="key0" />
                    <Picker.Item label="استاد یار" value="key1" />
              </Picker>
            </ListItem>

                 <ListItem noBorder style={styles.pickerstyle}>
                 <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={()=>{
                this.setState({radio:!this.state.radio})}}>
                    <Left style={{flex:1,marginLeft:15}}>
                    <Radio style={{alignSelf:'center'}} selected={this.state.radio} />
                    </Left>
                    <Right style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                    <Text style={{fontFamily: 'iransans',
                    color:"rgba(105,105,105,1)",marginRight:20}}>درس ارايه شده دارد</Text>
                    <Icon name="build" style={{color:"rgba(105,105,105,1)",fontSize:30}}></Icon>
                    </Right>
                    </TouchableOpacity>
                </ListItem>

                </View>


                <TouchableOpacity style={styles.buttonStyle}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4B97E5', '#6073F3']} style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                        <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 20, bottom: 4}}>ارسال</Text>
                    </LinearGradient>
                </TouchableOpacity>

                </Content>
            </Container>
            </Root>
        )
    }
}



const styles = {
    container: {
        margin:'2%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        height:Dimensions.get('window').width*.8,aspectRatio:1,width:null
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
      },
      latlng: {
        width: 200,
        alignItems: 'stretch',
      },
      button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
      },
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
    pickerstyle: {
        height: 50,
        margin: '1%',
        backgroundColor: '#F7F8FA',
        borderRadius: 8,
        marginLeft:0
    },
    buttonStyle: {
        flexDirection: 'column',
        marginHorizontal:'5%',
        height: 50,
        margin: '1%',
        marginBottom: 20,
        alignItems: 'stretch',
        justifyContent: 'center',
    }
}

export default EditDetails