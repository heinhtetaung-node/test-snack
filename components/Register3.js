import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, ScrollView, Keyboard, TouchableOpacity } from 'react-native'
import HeaderFlag from '../style/HeaderFlag'
import RNPickerSelect from 'react-native-picker-select'
import { scale, ScaledSheet } from 'react-native-size-matters'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import { Feather } from '@expo/vector-icons'

// Vias picker select list
const visa = [
    { label: 'Japan', value: 'Japan' },
    { label: 'Myanmar', value: 'Myanmar' },
    { label: 'North Korea', value: 'North Korea' },
    { label: 'Turkey', value: 'Turkey' },
    { label: 'Congo', value: 'Congo' },
];

const place = {
    label: 'Visa Type',
    value: null,
    color: '#9EA0A4',
}

// Language picker select list
const language = [
    { label: 'Japan', value:'Japan' },
    { label: 'China', value:'China' },
    { label: 'Myanmar', value:'Myanmar' },
    { label: 'Thai', value:'Thai' },
    { label: 'Russia', value:'Russia' },
]

const languagePlace = {
    label: 'Language',
    value: null,
    color: '#9EA0A4',
}

// Level picker select list
const level = [
    { label: 'N1', value:'N1' },
    { label: 'N2', value:'N2' },
    { label: 'N3', value:'N3' },
    { label: 'N4', value:'N4' },
    { label: 'N5', value:'N5' },
]

const levelPlace = {
    label: 'Choose level',
    value: null,
    color: '#9EA0A4',
}


export default function Register3({navigation}) {

    const [date, setDate] = useState(new Date(1598051730000))
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('Expiration date (YYYY-MM-DD)')

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
            Keyboard.dismiss();
        }}>

            <ScrollView contentContainerStyle={{ 
                flexGrow: 1, 
                flexDirection: 'column', 
                justifyContent: 'space-between'
            }}>
                <View>
                    <HeaderFlag />
                    <View style={styles.container}>
                        <View style={styles.lineText}>
                            <Text style={styles.fontLine}>Sign Up</Text>
                            <View style={styles.lines}>
                                <View style={styles.line1}></View>
                                <View style={styles.line1}></View>
                                <View style={styles.line1}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                            </View>
                        </View>

                        <Text style={styles.topText}>Please enter the visa type and expiration date</Text>

                            <View style={styles.selectTop}>
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
                                                paddingTop:scale(8),
                                                fontFamily:'Poppins',
                                                paddingHorizontal:scale(9)
                                            }
                                        }}
                                        onValueChange={(value) => console.log(JSON.stringify(value))}
                                        placeholder={place}
                                        items={visa}
                                    /> 
                            </View> 

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

                            <Text style={styles.languageText}>Language level</Text>
                            <View style={styles.selectTop}>
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
                                                paddingTop:scale(8),
                                                fontFamily:'Poppins',
                                                paddingHorizontal:scale(9)
                                            }
                                        }}
                                        onValueChange={(value) => console.log(JSON.stringify(value))}
                                        placeholder={languagePlace}
                                        items={language}
                                    /> 
                            </View> 

                            <View style={styles.selectTop}>
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
                                                paddingTop:scale(8),
                                                fontFamily:'Poppins',
                                                paddingHorizontal:scale(9)
                                            }
                                        }}
                                        onValueChange={(value) => console.log(JSON.stringify(value))}
                                        placeholder={levelPlace}
                                        items={level}
                                    /> 
                            </View> 
                    </View>
                </View>

                <View style={styles.footerButtom}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonPrevious}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('Register4')}>
                            <Text style={styles.buttonNext}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </TouchableWithoutFeedback>
    )
}

const styles = ScaledSheet.create({
    container:{
        marginHorizontal:'14@s'
    },
    lineText:{
        marginTop:'18@s',
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
    topText:{
        marginTop:'30@s',
        marginBottom:'14@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    selectTop:{
        borderWidth:1,
        height:'35@s',
        fontSize: '11@s',
        borderColor: 'gray',
        borderRadius: 4,
        marginBottom:'8@s'
    },
    datePickerStyle: {
        width: '100%',
        marginTop:'2@s'
    },
    languageText:{
        marginTop:'33@s',
        marginBottom:'14@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    footerButtom:{
        width:'100%',
        marginBottom:20
    },
    button:{
        paddingHorizontal:'14@s',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    containerButton:{
        width:'49%'
    },
    buttonPrevious:{
        color:'#595959',
        fontWeight:'500',
        fontSize:'12@s',
        textAlign:'center',
        backgroundColor:'#fff',
        borderRadius:4,
        borderWidth:2,
        borderColor:'#bbb',
        paddingVertical:'9@s',
    },
    buttonNext:{
        color:'#fff',
        fontWeight:'500',
        fontSize:'12@s',
        textAlign:'center',
        backgroundColor:'#003978',
        borderRadius:4,
        paddingVertical:'11@s',
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
        fontSize:'12@s',
    }
})