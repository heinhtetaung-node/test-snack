import React from 'react'
import { View, Text, TextInput, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import HeaderFlag from '../style/HeaderFlag'

export default function ForgetPassWorld2({navigation}) {

    const[loaded] = useFonts({Poppins})
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
                    <Text style={styles.second}>Create a new password for your account here.</Text>   
                    <TextInput placeholder={'New password'} style={styles.input} />

                    <TextInput placeholder={'Confirm password'} style={styles.input} />

                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
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
    input:{
		paddingHorizontal: '16@ms',
		borderWidth: 2,
		borderColor: '#bbb',
        borderRadius:6,
        height:'40@s',
        marginBottom:'14@s',
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