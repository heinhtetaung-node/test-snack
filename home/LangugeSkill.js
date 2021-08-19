import React from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import RNPickerSelect from 'react-native-picker-select'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import LangugeSkillHeader from '../style/LangugeSkillHeader'
import TopApp from '../style/HomeTop'

// industry picker select list

const language = [
    { label: 'Level 1', value: 'Level 1' },
    { label: 'Level 2', value: 'Level 2' },
    { label: 'Level 3', value: 'Level 3' }
];

const languagePlace = {
    label: 'Language level',
    value: null,
    color: '#9EA0A4',
}

export default function LangugeSkill() {

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
                        <LangugeSkillHeader />
                        <View style={styles.top}>
                            <View style={styles.body}>
                                <Text style={styles.bodyText}>Language</Text>

                                <TextInput placeholder={'Language name'} style={styles.input} />

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
                                        placeholder={languagePlace}
                                        items={language}
                                    /> 
                                </View> 
                                {/* Major Type ended ==================================== */}
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
    container:{
        paddingBottom:'40@s'
    },
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
    }
})