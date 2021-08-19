import React from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { scale } from 'react-native-size-matters'
import HeaderFlag from '../style/HeaderFlag'
import RNPickerSelect from 'react-native-picker-select'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'

const selectCountry = [
    { label: 'Japan', value: 'Japan' },
    { label: 'Myanmar', value: 'Myanmar' },
    { label: 'Iran', value: 'Iran' },
    { label: 'Turkey', value: 'Turkey' }
];

const place = {
    label: 'Select Country',
    value: null,
    color: '#9EA0A4',
}

const country = [
    { label: 'Japan', value: 'Japan' },
    { label: 'Myanmar', value: 'Myanmar' },
    { label: 'Estonia', value: 'Estonia' },
    { label: 'Turkey', value: 'Turkey' }
];

const countryPlace = {
    label: 'Country',
    value: null,
    color: '#9EA0A4',
}

const prefectures = [
    { label: 'Nagoya', value: 'Nagoya' },
    { label: 'Todōfuken', value: 'Todōfuken' },
    { label: 'Yamamoto', value: 'Yamamoto' },
    { label: 'Shimaji', value: 'Shimaji' }
];

const prefecturesPlace = {
    label: 'Prefectures',
    value: null,
    color: '#9EA0A4'
}

export default function Register2({navigation}) {

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
                <View style={styles.kick}>
                    <HeaderFlag />

                    <View style={styles.lineText}>
                        <Text style={styles.fontLine}>Sign Up</Text>
                        <View style={styles.lines}>
                            <View style={styles.line1}></View>
                            <View style={styles.line1}></View>
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

                    <View style={styles.inputBox}>
                            <Text style={styles.selectText}>Please select your country</Text>

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
                                        items={selectCountry}
                                    /> 
                                </View>

                        <View style={styles.address}>
                            <Text style={styles.textAddress}>Please enter your address</Text>

                            <View style={styles.selectBotton}>
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
                                    placeholder={countryPlace}
                                    items={country}
                                /> 
                            </View>

                            <View style={styles.selectBotton}>
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
                                    placeholder={prefecturesPlace}
                                    items={prefectures}
                                /> 
                            </View>

                            <TextInput placeholder={'City and Township'} style={styles.input} />

                            <View style={styles.textAreaContainer} >
                                <TextInput
                                style={styles.textArea}
                                placeholder="Address"
                                placeholderTextColor="gray"
                                textAlignVertical="top" 
                                numberOfLines={10}
                                multiline={true}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.footerButtom}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonPrevious}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('Register3')}>
                            <Text style={styles.buttonNext}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}


const styles = ScaledSheet.create({
    kick:{
        marginBottom:'100@s'
    },
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
    inputBox:{
        paddingHorizontal:'14@s',
        marginTop:'30@s'
    },
    selectText:{
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    selectTop:{
        marginTop:17,
        borderWidth:1,
        height:'35@s',
        fontSize: '11@s',
        borderColor: 'gray',
        borderRadius: 4,
    },
    selectBotton:{
        marginBottom:9,
        borderWidth:1,
        height:'35@s',
        fontSize: '11@s',
        borderColor: 'gray',
        borderRadius: 4
    }, 
    address:{
        marginTop:'34@s',
    },
    textAddress:{
        fontSize:'11@s',
        paddingBottom:'13@s',
        fontFamily:'PoppinsMedium'
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
    textAreaContainer: {
        borderColor: '#bbb',
        borderWidth: 1,
        paddingLeft:15,
        borderRadius:4,
        padding:12
    },
    textArea: {
        height: '78@s',
        fontFamily:'Poppins',
        fontSize:'11@s'
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