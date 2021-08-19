import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import { AntDesign } from '@expo/vector-icons'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import { useNavigation } from '@react-navigation/native'

export default function ProfilePicAndReHeader() {
    const navigation = useNavigation()

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={[styles.top, {position: 'relative', zIndex: 2}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <AntDesign name="arrowleft" size={scale(20)} color="#3F62A8" />
            </TouchableOpacity>
            <Text style={styles.text}>Profile picture and resume</Text>
        </View>
    )
}


const styles = ScaledSheet.create({
    top:{
        marginTop:25,
        height:'47@s',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'16@s',
        backgroundColor:'#fff',
        borderColor:'#ddd',
        borderBottomWidth:1,
        elevation: 8,
    },
    text:{
        fontFamily:'Poppins',
        color:'#000',
        fontSize:'20@s',
        paddingLeft:'26@s',
    }
})