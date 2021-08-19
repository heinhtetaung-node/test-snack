import React, { useState } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import RNPickerSelect from 'react-native-picker-select'
import ExperienceHeader from '../style/ExperienceHeader'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Feather } from '@expo/vector-icons'
import TopApp from '../style/HomeTop'

// industry picker select list

const industry = [
    { label: 'aa', value: 'aa' },
    { label: 'bb', value: 'bb' },
    { label: 'cc', value: 'cc' }
];

const industryPlace = {
    label: 'Industry',
    value: null,
    color: '#9EA0A4',
}


// Employment status picker select list

const status = [
    { label: 'full-time', value: 'full-time' },
    { label: 'part-time', value: 'part-time' },
    { label: 'so', value: 'so' }
];

const statusPlace = {
    label: 'Employment status',
    value: null,
    color: '#9EA0A4',
}


export default function Experience() {

    // start date date and time setUp
    const [date, setDate] = useState(new Date(1598051730000))
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('Start date')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate)
        let Dates = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
        setText(Dates)
    }
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }
    
    const showDatepicker = () => {
        showMode('date');
    }

    // Ended date date and time setUp
    const [dateEnd, setDateEnd] = useState(new Date(1598051730000))
    const [modeEnd, setModeEnd] = useState('date')
    const [showEnd, setShowEnd] = useState(false)
    const [textEnd, setTextEnd] = useState('End date')

    const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowEnd(Platform.OS === 'ios');
        setDateEnd(currentDate);

        let tempDate = new Date(currentDate)
        let Dates = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
        setTextEnd(Dates)
    }
    
    const showModeEnd = (currentModes) => {
        setShowEnd(true);
        setModeEnd(currentModes);
    }
    
    const showDatepickerEnd = () => {
        showModeEnd('date');
    }

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}> 
            <View style={TopApp.veryFirstTop}>
                <ScrollView contentContainerStyle={{ 
                    flexGrow: 1, 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    backgroundColor:'#F5F5F5'
                }}>
                    <View style={styles.container}>
                        <ExperienceHeader />
                        <View style={styles.top}>
                            <View style={styles.body}>
                                <Text style={styles.bodyText}>About work experience</Text>

                                <TextInput placeholder={'School name'} style={styles.input} />

                                <TextInput placeholder={'Job title'} style={styles.input} />

                                {/* Major Type started ==================================== */}
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
                                        placeholder={industryPlace}
                                        items={industry}
                                    /> 
                                </View> 
                                {/* Major Type ended ==================================== */}

                                {/* Graudation status started =========================== */}
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
                                        placeholder={statusPlace}
                                        items={status}
                                    /> 
                                </View> 
                                {/* Graudation status ended =========================== */}

                                {/* Date Start setarted =============================== */}
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
                                {/* Date Start ended =============================== */}

                                {/* End data started =============================== */}
                                <TouchableWithoutFeedback onPress={showDatepickerEnd}>
                                    <View style={styles.inputCalendar}>
                                        <Text style={styles.calendarText}>{textEnd}</Text>
                                        <Feather name="calendar" size={scale(17)} color="gray" />
                                    </View>
                                </TouchableWithoutFeedback>
                                
                                {showEnd && (
                                    <DateTimePicker
                                    testID="dateTimePicker"
                                    value={dateEnd}
                                    mode={modeEnd}
                                    is24Hour={true}
                                    display="spinner"
                                    onChange={onChangeEnd}
                                    />
                                )}
                                {/* End data ended =============================== */}

                                <View style={styles.barbar}></View>

                                <TextInput placeholder={'Job description (optional)'} style={styles.input} />
                            </View>
                            <Text style={styles.addMore}>+ Add more</Text>
                        </View>
                    </View>
                    <View style={styles.footerButtom}>
                        <View style={styles.button}>
                            <View style={styles.containerButton}>
                                <Text style={styles.buttonPrevious}>Cancel</Text>
                            </View>
                                    
                            <View style={styles.containerButton}>
                                <Text style={styles.buttonNext}>Update</Text>
                            </View>
                        </View>
                    </View>   
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}



const styles = ScaledSheet.create({
    top:{
        flex:1
    },
    body:{
        padding:'14@s',
        backgroundColor:'#fff'
    },
    bodyText:{
        fontSize:'12@s',
        fontFamily:'Poppins',
        paddingBottom:'14@s'
    },
    input:{
        borderWidth: 1,
        height:'36@s',
        borderColor:'#bbb',
        borderRadius:4,
        marginBottom:'8@s',
        paddingLeft:15,
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
    selectTop:{
        borderWidth:1,
        height:'35@s',
        fontSize: '11@s',
        borderColor: 'gray',
        borderRadius: 4,
        marginBottom:'8@s'
    },
    inputCalendar:{
        borderWidth: 1,
        height:'36@s',
        borderColor:'#bbb',
        borderRadius:4,
        marginTop:'7@s',
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
    addMore:{
        color:'#fff',
        fontWeight:'500',
        fontSize:'12@s',
        textAlign:'center',
        backgroundColor:'#003978',
        borderRadius:4,
        paddingVertical:'9@s',
        width:'49%',
        marginLeft:'14@s',
        marginTop:'8@s'
    },
    footerButtom:{
        width:'100%',
        marginBottom:20,
        paddingTop:'50@s'
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
    barbar:{
        marginTop:'7@s'
    }
})