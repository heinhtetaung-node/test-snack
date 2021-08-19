import React from 'react'
import { View, Text, ScrollView, TouchableWithoutFeedback, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import HeaderFlag from '../style/HeaderFlag'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'


export default function Register5({navigation}) {

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
                                    <View style={styles.line1}></View>
                                    <View style={styles.line1}></View>
                                    <View style={styles.line}></View>
                                    <View style={styles.line}></View>
                                    <View style={styles.line}></View>
                                    <View style={styles.line}></View>
                                    <View style={styles.line}></View>
                                </View>
                            </View>

                            <Text style={styles.firstText}>Please enter your contact information (Mobile phone)</Text>

                            <TextInput placeholder={'Mobile number'} style={styles.input} />

                            <TextInput placeholder={'Line number'} style={styles.input} />

                            <TextInput placeholder={'Facebook name'} style={styles.input} />

                            <TextInput placeholder={'Viber number'} style={styles.input} />

                            <Text style={styles.second}>Please enter email and password</Text>
                            <Text style={styles.third}>This email and password will be used for signing in.</Text>

                            <TextInput placeholder={'Email'} style={styles.input} />

                            <TextInput placeholder={'Password'} style={styles.input} />

                            <TextInput placeholder={'Comfirm password(At 8 characters)'} style={styles.input} />
                        </View>
                </View>
                <View style={styles.footerButtom}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonPrevious}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('Register6')}>
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
        marginHorizontal:'14@s',
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
    firstText:{
        marginTop:'30@s',
        marginBottom:'14@s',
        fontSize:'11@s',
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
    second:{
        marginTop:'34@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    third:{
        color:'#595959',
        fontSize:'10@s',
        marginBottom:'14@s',
        fontFamily:'Poppins'
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