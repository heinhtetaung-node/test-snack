import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'
import HeaderFlag from '../style/HeaderFlag'

export default function ForgetPassWorld({navigation}) {

    const[loaded] = useFonts({Poppins, PoppinsBold})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View>
                <HeaderFlag />

                <View style={[styles.conatiner, {height : height-50, width : width}]}>
                    <Text style={styles.first}>Reset password</Text>
                    <Text style={styles.second}>Enter an email associated with your account and we will send link to reset your password</Text>   
                    <View>
                        <Text style={styles.emailText}>Email</Text>
                        <TextInput placeholder={'someone@gmail.com'} style={styles.input} />

                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => navigation.navigate('ForgetPassWorld2')}>
                                <Text style={styles.buttonText}>Send reset link</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = ScaledSheet.create({
    conatiner:{
        justifyContent: 'center',
        paddingHorizontal:'15@s'
    },
    first:{
        fontSize:'20@s',
        fontFamily:'Poppins',
        paddingBottom:'8@ms'
    },
    second:{
        fontFamily:'Poppins',
        fontSize:'11@s',
        color:'#595959',
        paddingBottom:'40@ms'
    },
    emailText:{
        position: 'absolute',
        backgroundColor: '#fff',
        width:'30@s',
        marginTop:'-6@s',
        zIndex: 999,
        paddingLeft:'2@s',
        marginHorizontal:'16@ms',
        fontSize:'9@s',
        color:'#3F62A8',
        fontFamily:'Poppins'
    },
    input:{
		paddingHorizontal: '16@ms',
		borderWidth: 2,
		borderColor: '#3F62A8',
        borderRadius:6,
        height:'54@s',
        marginBottom:'6@s',
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
    button:{
        marginTop:'32@ms',
        borderRadius:4,
        paddingVertical:'11@s',
        paddingHorizontal:'10@vs',
        backgroundColor:'#003978',
    },
    buttonText:{
        color:'#fff',
        fontWeight:'500',
        fontSize:'11@s',
        textAlign:'center',
        fontFamily:'Poppins'
    },
})