import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import { Feather } from '@expo/vector-icons'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import { useNavigation } from '@react-navigation/native'

export default function MailsHeader() {

    const navigation = useNavigation()

    const[loaded] = useFonts({PoppinsMedium})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={[styles.top, {position: 'relative', zIndex: 2}]}>
            <Text style={styles.text}>Mails box</Text>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Feather name="bell" size={scale(19)} color="black" />
                    <View style={styles.righNumPosition}>
                        <Text style={styles.rightNumber}>5</Text>
                    </View> 
                </TouchableOpacity> 
            </View>  
        </View>
    )
}

const styles = ScaledSheet.create({
    top:{
        backgroundColor:'#fff',
        height:'40@s',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'16@s',
    },
    text:{
        color:'#3F62A8',
        fontSize:'20@s',
        fontFamily:'PoppinsMedium'
    },
    righNumPosition:{
        position:'absolute',
        left:'10@s',
        bottom:'10@s',
    },
    rightNumber:{
        backgroundColor:'#F27E34',
        width:'12@s',
        height:'12@s',
        borderRadius:'25@s',
        color:'#fff',
        textAlign:'center',
        fontSize:'8@s',
    }
})