import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native'
import HeaderFlag from '../style/HeaderFlag'
import RNPickerSelect from 'react-native-picker-select'
import { Checkbox } from 'react-native-paper'
import { scale, ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import DateTimePicker from '@react-native-community/datetimepicker'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

// picker select list
const placeList = [
    { label: 'PHP', value:'PHP' },
    { label: 'Laravel', value:'Laravel' },
    { label: 'Javascript', value:'Javascript' },
    { label: 'React Native', value:'React Native' },
    { label: 'React JS', value:'React JS' },
]

const place = {
    label: 'School type',
    value: null,
    color: '#bbb',
}

// picker select list Job
const jobList = [
    { label: 'PHP', value:'PHP' },
    { label: 'Laravel', value:'Laravel' },
    { label: 'Javascript', value:'Javascript' },
    { label: 'React Native', value:'React Native' },
    { label: 'React JS', value:'React JS' },
]

const job = {
    label: 'Industry',
    value: null,
    color: '#bbb',
}

// picker select list language
const languageList = [
    { label: 'Japan', value:'Japan' },
    { label: 'German', value:'German' },
    { label: 'Korea', value:'Korea' },
    { label: 'English', value:'English' },
    { label: 'Myanmar', value:'Myanmar' },
]

const language = {
    label: 'Language level',
    value: null,
    color: '#bbb',
}


// picker select list skill
const skillList = [
    { label: 'Good', value:'Good' },
    { label: 'Awesome', value:'Awesome' },
]

const skill = {
    label: 'skill',
    value: null,
    color: '#bbb',
}


export default function Register11({navigation}) {

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

    // work start data and time date and time setUp
    const [dateW, setDateW] = useState(new Date(1598051730000))
    const [modeW, setModeW] = useState('date')
    const [showW, setShowW] = useState(false)
    const [textW, setTextW] = useState('Start date')

    const onChangeW = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowW(Platform.OS === 'ios');
        setDateW(currentDate);

        let tempDate = new Date(currentDate)
        let Dates = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
        setTextW(Dates)
    }
    
    const showModeW = (currentMode) => {
        setShowW(true);
        setModeW(currentMode);
    }
    
    const showDatepickerW = () => {
        showModeW('date');
    }

    // Work Ended date date and time setUp
    const [dateWE, setDateWE] = useState(new Date(1598051730000))
    const [modeWE, setModeWE] = useState('date')
    const [showWE, setShowWE] = useState(false)
    const [textWE, setTextWE] = useState('End date')

    const onChangeWE = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowWE(Platform.OS === 'ios');
        setDateWE(currentDate);

        let tempDate = new Date(currentDate)
        let Dates = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
        setTextWE(Dates)
    }
    
    const showModeWE = (currentMode) => {
        setShowWE(true);
        setModeWE(currentMode);
    }
    
    const showDatepickerWE = () => {
        showModeWE('date');
    }

    // =================================

    const [checked, setChecked] = React.useState(false)

    const [shouldShow, setshouldShow] = useState(true)
    const [qualificationShow, setQualificationShow] = useState(true)

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
                        <Text style={styles.textOne}>Please confirm regration details</Text>
                        
                        <Text style={styles.textTwo}>Contact information</Text>

                        <View style={styles.inputOne}>
                            <Text style={styles.nameText}>Fist name</Text>
                            <TextInput placeholder={'Jhon'} style={styles.nameInput} />
                        </View>

                        <View style={styles.inputTwo}>
                            <Text style={styles.surnameText}>Surname</Text>
                            <TextInput placeholder={'Cena'} style={styles.nameInput} />
                        </View>

                        <TextInput placeholder={'Surname'} style={styles.input} />

                        <TextInput placeholder={'Mei'} style={styles.input} />

                        <View style={styles.textThree}>
                            <Text style={styles.edu}>Education</Text>
                            <AntDesign name="delete" size={scale(16)} color="gray" />
                        </View>

                        <TextInput placeholder={'School name'} style={styles.input} />

                        {([1,2,3].map((item)=>{
                            return(
                                <View style={styles.selectTop} key={item}>
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
                                        items={placeList}
                                    /> 
                                </View>
                            )
                        }))}
                        {/* Date Start =============================== */}

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
                        
                        {/* Date Start =============================== */}


                        {/* Date Ended =============================== */}
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

                        {/* Date Ended =============================== */}

                        <View style={styles.footerButtom}>
                            <View style={styles.button}>
                                <Text style={styles.buttonPrevious}>Update</Text>
                                <Text style={styles.buttonNext}>+ Add more</Text>
                            </View>
                        </View>

                        <Text style={styles.aboutText}>About job</Text>

                        {([1,2,3,4].map((item)=>{
                            return(
                                <View style={styles.selectTop} key={item}>
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
                                        placeholder={job}
                                        items={jobList}
                                    /> 
                                </View>
                            )
                        }))}

                        <View style={styles.textThree}>
                            <Text style={styles.aboutWork}>About work experience</Text>
                            <AntDesign name="delete" size={scale(16)} color="gray" />
                        </View>

                        <TextInput placeholder={'Company name'} style={styles.input} />

                        <TextInput placeholder={'Job title'} style={styles.input} />

                        {([1,2].map((item)=>{
                            return(
                                <View style={styles.selectTop} key={item}>
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
                                        placeholder={job}
                                        items={jobList}
                                    /> 
                                </View>
                            )
                        }))}

                            <TouchableWithoutFeedback onPress={showDatepickerW}>
                                <View style={styles.inputCalendar}>
                                    <Text style={styles.calendarText}>{textW}</Text>
                                    <Feather name="calendar" size={scale(17)} color="gray" />    
                                </View>
                            </TouchableWithoutFeedback>
                            
                            {showW && (
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={dateW}
                                mode={modeW}
                                is24Hour={true}
                                display="spinner"
                                onChange={onChangeW}
                                />
                            )}


                            <TouchableWithoutFeedback onPress={showDatepickerWE}>
                                <View style={styles.inputCalendar}>
                                    <Text style={styles.calendarText}>{textWE}</Text>
                                    <Feather name="calendar" size={scale(17)} color="gray" />    
                                </View>
                            </TouchableWithoutFeedback>
                            
                            {showWE && (
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={dateWE}
                                mode={modeWE}
                                is24Hour={true}
                                display="spinner"
                                onChange={onChangeWE}
                                />
                            )}

                        <TextInput placeholder={'Job description (optional)'} style={styles.input} />

                        <View style={styles.footerButtom}>
                            <View style={styles.button}>
                                <Text style={styles.buttonPrevious}>Update</Text>
                                <Text style={styles.buttonNext}>+ Add more</Text>
                            </View>
                        </View>

                        <View style={styles.textThree}>
                            <Text style={styles.lang}>Language</Text>
                            <AntDesign name="delete" size={scale(16)} color="gray" />
                        </View>

                        <TextInput placeholder={'Language name'} style={styles.input} />

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
                                placeholder={language}
                                items={languageList}
                            /> 
                        </View>

                        <View style={styles.footerButtom}>
                            <View style={styles.button}>
                                <Text style={styles.buttonPrevious}>Update</Text>
                                <Text style={styles.buttonNext}>+ Add more</Text>
                            </View>
                        </View>

                        {
                            shouldShow ? (
                                <View>
                                    <Text style={styles.otherText}>Other Skill</Text>
                                    <Text 
                                        style={styles.buttonNext}  
                                        onPress={()=>setshouldShow(!shouldShow)}
                                    >
                                        + Add other skill
                                    </Text>
                                </View>
                            ) : (
                                <View>
                                    <View style={styles.qAndOther}>
                                        <Text style={{fontFamily:'PoppinsMedium'}}>Other Skill</Text>
                                        <AntDesign name="delete" size={scale(16)} color="gray" />
                                    </View>
                                    <TextInput placeholder={'Skill'} style={styles.input} />

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
                                            placeholder={skill}
                                            items={skillList}
                                        /> 
                                    </View>

                                    <View style={styles.footerButtom}>
                                        <View style={styles.button}>
                                            <Text style={styles.buttonPrevious}>Update</Text>
                                            <Text style={styles.buttonNext}>+ Add more</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }  

                        {
                            qualificationShow? (
                                <View>
                                    <Text style={styles.otherText}>Qualification</Text>
                                    <Text 
                                        style={styles.buttonNext}  
                                        onPress={()=>setQualificationShow(!qualificationShow)}
                                    >
                                        + Add qualification
                                    </Text>
                                </View>
                            ) : (
                                <View>
                                    <View style={styles.qAndOther}>
                                        <Text style={{fontFamily:'PoppinsMedium'}}>Qualification</Text>
                                        <AntDesign name="delete" size={scale(16)} color="gray" />
                                    </View>

                                    <TextInput placeholder={'Qualification'} style={styles.input} />

                                    <View style={styles.footerButtom}>
                                        <View style={styles.button}>
                                            <Text style={styles.buttonPrevious}>Update</Text>
                                            <Text style={styles.buttonNext}>+ Add qualification</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }

                        <Text style={styles.prText}>PR</Text>
                        
                        <TextInput placeholder={'About me'} style={styles.input} />

                        <Text style={styles.addText}>Add files</Text>

                        <View style={styles.twoImage}>
                            <View style={styles.imageContainer}>
                                <View style={styles.circle}>
                                    <View style={styles.imageAndText}>
                                        <Image style={styles.circleImg} source={require('../image/can.png')} />
                                        <Text style={styles.textCircle}>Upload profile picture</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.imageContainer}>
                                <View style={styles.square}>
                                    <View style={styles.imageAndText}>
                                        <Image style={styles.circleImg} source={require('../image/up.png')} />
                                        <Text style={styles.textCircle}>Upload your resume</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.checkBoxAndText}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}

                                style={{paddingTop:scale(5)}}
                            />
                            <Text style={styles.checkBoxText}>By registering, I am agreeing to the terms and conditions of Job in Japan(JIJ).</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
                        <View style={styles.buttonHome}>
                            <Text style={styles.buttonTextHome}>Confirm Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}


const styles = ScaledSheet.create({
    container:{
        paddingHorizontal:'14@s'
    },
    textOne:{
        fontWeight:'bold',
        marginTop:'24@s',
        textAlign:'center',
        marginBottom:'14@s',
        fontSize:'17@s',
        fontFamily:'PoppinsMedium'
    },
    textTwo:{
        marginTop:'20@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    inputOne:{
        marginTop:'20@s'
    },
    inputTwo:{
        marginTop:'13@s'
    },
    nameText:{
        position:'absolute',
        backgroundColor: '#fff',
        width:'50@s',
        marginTop:'-6@s',
        zIndex: 999,
        paddingLeft:'2@s',
        marginHorizontal:'14@s',
        fontSize:'9@s',
        color:'#bbb',
        fontFamily:'Poppins'
    },
    surnameText:{
        position:'absolute',
        backgroundColor: '#fff',
        width:'50@s',
        marginTop:'-6@s',
        zIndex: 999,
        paddingLeft:'2@s',
        marginHorizontal:'14@s',
        fontSize:'9@s',
        color:'#bbb',
        fontFamily:'Poppins'
    },
    nameInput:{
        paddingHorizontal: '14@s',
		borderWidth: 2,
		borderColor: '#bbb',
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
        marginTop:'7@s',
        paddingLeft:'13@s',
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
    textThree:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:'20@s'
    },
    lang:{
        fontSize:'11@s',
        fontFamily:'PoppinsMedium' 
    },
    edu:{
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    aboutWork:{
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
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
    aboutText:{
        fontSize:'11@s',
        marginTop:'20@s',
        marginBottom:'14@s',
        fontFamily:'PoppinsMedium'
    },
    selectTop:{
        marginTop:'8@s',
        borderWidth:1,
        height:'37@s',
        fontSize: '11@s',
        borderColor: 'gray',
        borderRadius: 4,
    },
    footerButtom:{
        width:'100%',
        marginTop:'15@s'
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    buttonPrevious:{
        color:'#595959',
        fontWeight:'500',
        fontSize:'11@s',
        textAlign:'center',
        backgroundColor:'#fff',
        borderRadius:4,
        borderWidth:2,
        borderColor:'#bbb',
        paddingVertical:'9@s',
        width:'49%'
    },
    buttonNext:{
        color:'#fff',
        fontWeight:'500',
        fontSize:'11@s',
        textAlign:'center',
        backgroundColor:'#003978',
        borderRadius:4,
        paddingVertical:'9@s',
        width:'49%'
    },
    otherText:{
        marginTop:'22@s',
        marginBottom:'14@s',
        fontFamily:'PoppinsMedium',
        fontSize:'11@s'
    },
    qAndOther:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'20@s',
        marginBottom:'14@s'
    },
    prText:{
        marginTop:'20@s',
        marginBottom:'15@s',
        fontFamily:'PoppinsMedium',
        fontSize:'11@s'
    },
    buttonHome:{
        borderRadius:4,
        paddingVertical:'11@s',
        backgroundColor:'#003978',
        marginHorizontal:'16@s',
        marginBottom:20
    },
    buttonTextHome:{
        color:'#fff',
        fontWeight:'500',
        fontSize:'12@s',
        textAlign:'center',
        fontFamily:'Poppins'
    },
    addText:{
        marginTop:'20@s',
        marginBottom:'14@s',
        fontFamily:'PoppinsMedium',
        fontSize:'11@s'
    },
    twoImage:{
        width:'100%',
        height: 'auto',
        flexDirection:'row',
        marginBottom:'10@s'
    },
    imageContainer:{
        width:'50%',
        height:'auto',
    },
    circle:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.41,
        height: Dimensions.get('window').width * 0.41,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        backgroundColor:'#FAFAFA',
        justifyContent:'center',
        alignItems:'center'
    },
    square:{
        width: Dimensions.get('window').width * 0.41,
        height: Dimensions.get('window').width * 0.41,
        borderWidth:1,
        borderRadius:4,
        borderColor:'#bbb',
        borderStyle:'dashed',
        backgroundColor:'#FAFAFA',
        justifyContent:'center',
        alignItems:'center'
    },
    circleImg:{
        width:'18@s',
        height:'18@s',
        marginHorizontal:'50%'
    },
    textCircle:{
        textAlign:'center',
        fontSize:'11@s',
        color:'#bbb'
    },
    checkBoxAndText:{
        flexDirection:'row',
        marginBottom:'24@s',
        height:'46@s',
        alignItems:'center'
    },
    checkBoxText:{
        color:'#333333',
        fontSize:'11@s',
        fontFamily:'Poppins',
        paddingTop:'5@s'
    }
})