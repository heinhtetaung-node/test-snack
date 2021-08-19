import React, { useState } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import RNPickerSelect from 'react-native-picker-select'
import HeaderFlag from '../style/HeaderFlag'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import { Feather } from '@expo/vector-icons'

const prefectures = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' }
];

const prefecturesPlace = {
    label: 'Select gender',
    value: null,
    color: '#9EA0A4'
}

export default function Register({navigation}) {

    const [date, setDate] = useState(new Date(1598051730000))
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('Birthdate')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
        setText(fDate)
    }
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }
    
    const showDatepicker = () => {
        showMode('date');
    }
    

    const[loaded] = useFonts({Poppins, PoppinsMedium})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
    <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
    }}>
    <ScrollView contentContainerStyle={{ 
        flexGrow: 1, 
        flexDirection: 'column', 
        justifyContent: 'space-between'
    }}>
        <View>
            <HeaderFlag />

            <View style={styles.lineText}>
            <Text style={styles.fontLine}>Sign Up</Text>
                <View style={styles.lines}>
                    <View style={styles.line1}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                </View>
            </View>      

            <View style={styles.login}>
                <Text style={styles.firstText}>Please enter the following information</Text>

                <View style={styles.signInInputAndPass}>
                    <Text style={styles.nameText}>Fist name</Text>
                    <TextInput placeholder={'Jhon'} style={styles.JhonInput} />

                    <TextInput placeholder={'Cena'} style={styles.input} />

                    <TextInput placeholder={'Surname'} style={styles.input} />

                    <TextInput placeholder={'Mei'} style={styles.input} />

                    <Text style={styles.birthdayText}>Please select your birthday</Text>

                    <TouchableWithoutFeedback onPress={showDatepicker}>
                        <View style={styles.inputCalendar}>
                            <Text style={styles.calendarText}>{text}</Text>
                            <Feather name="calendar" size={scale(17)} color="gray" />
                        </View>
                    </TouchableWithoutFeedback>
                    
                    
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                        />
                    )}

                    <Text style={styles.genderText}>Please select gender</Text>
                    <View style={styles.gender}>
                        <Text style={styles.positionGender}>Gender</Text>
                        <View style={styles.inputGender}>
                            <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                style={{
                                    inputIOS: {
                                        fontSize:scale(11),
                                        color:'#333333',
                                        paddingTop:scale(10),
                                        fontFamily:'Poppins',
                                        paddingHorizontal:scale(9)
                                    }
                                }}
                                style={{
                                    inputAndroid:{
                                        fontSize:scale(11),
                                        color:'#333333',
                                        paddingTop:scale(12),
                                        fontFamily:'Poppins',
                                        paddingHorizontal:scale(9)
                                    }
                                }}
                                onValueChange={(value) => console.log(JSON.stringify(value))}
                                placeholder={prefecturesPlace}
                                items={prefectures}
                            />
                        </View>
                        <Text style={styles.selectGender}>Please select gender</Text>
                    </View>
                </View>
            </View> 
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Register2')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </TouchableWithoutFeedback>
    )
}


const styles = ScaledSheet.create({
    lineText:{
        marginTop:'18@s',
        paddingHorizontal:'14@s'
    },
    fontLine:{
        fontSize:'13@s',
        paddingBottom:'13@s',
        fontFamily:'PoppinsMedium'
    },
    lines:{
        flexDirection:'row',
    }, 
    line1:{
        width:'20@s',
        borderWidth:1,
        borderColor:'#F27E34',
        marginRight:'3@s'
    }, 
    line:{
        width:'20@s',
        borderWidth:1,
        borderColor:'#BFBFBF',
        marginRight:'3@s'
    },
    login:{
        paddingHorizontal:'14@s',
        marginTop:'30@s'
    },
    firstText:{
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    signInInputAndPass:{
        marginTop:27,
        marginBottom:72
    },
    nameText:{
        position:'absolute',
        backgroundColor: '#fff',
        width:'50@s',
        marginTop:'-6@s',
        zIndex: 999,
        paddingLeft:'2@s',
        marginHorizontal:16,
        fontSize:'9@s',
        color:'#3F62A8',
        fontFamily:'Poppins'
    },
    JhonInput:{
		paddingHorizontal: 16,
		borderWidth: 2,
		borderColor: '#3F62A8',
        borderRadius:4,
        height:'43@s',
        marginBottom:'6@s',
        fontSize:'11@s',
        fontFamily:'Poppins',
    },
    input:{
        borderWidth: 1,
        height:'36@s',
        borderColor:'#bbb',
        borderRadius:4,
        marginBottom:'6@s',
        paddingLeft:15,
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
    inputCalendar:{
        borderWidth: 1,
        height:'36@s',
        borderColor:'#bbb',
        borderRadius:4,
        marginBottom:'30@s',
        paddingHorizontal:'12@s',
        fontFamily:'Poppins',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    calendarText:{
        color:'#595959',
        fontFamily:'Poppins',
        fontSize:'11@s',
    },
    calendarImg:{
        width:'18@s',
        height:'18@s'
    },
    birthdayText:{
        marginTop:'34@s',
        marginBottom:'13@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    genderText:{
        marginBottom:'13@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    inputGender:{
        paddingLeft:6,
		borderWidth: 2,
		borderColor: '#FF4D4F',
        borderRadius:4,
        height:'43@s',
        fontSize:'11@s',
        fontFamily:'Poppins',
    },
    positionGender:{
        position: 'absolute',
        backgroundColor: '#fff',
        width:'38@s',
        marginTop:'-6@s',
        zIndex: 999,
        paddingLeft:'2@s',
        marginHorizontal:16,
        fontSize:'9@s',
        color:'#FF4D4F',
        fontFamily:'Poppins'
    },
    selectGender:{
        color:'#FF4D4F',
        paddingLeft:16,
        paddingTop:'2@s',
        fontSize:'11@s',
        fontFamily:'Poppins'
    },
    button:{
        borderRadius:4,
        paddingVertical:'11@s',
        paddingHorizontal:10,
        backgroundColor:'#003978',
        marginHorizontal:'14@s',
    },
    buttonText:{
        color:'#fff',
        fontWeight:'500',
        fontSize:'12@s',
        textAlign:'center',
        fontFamily:'Poppins'
    },
    footer:{
        marginBottom:20
    }
})