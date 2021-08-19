import React from 'react'
import { View, Text } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import { AntDesign } from '@expo/vector-icons'

export default function PositionHeader() {

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={[styles.top, {position: 'relative', zIndex: 2}]}>
            <AntDesign name="arrowleft" size={scale(20)} color="#3F62A8" />
            <Text style={styles.text}>Work location / line station</Text>
        </View>
    )
}

const styles = ScaledSheet.create({
    top:{
        marginTop:'25@s',
        height:'47@s',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'16@s',
        backgroundColor:'#fff',
        marginBottom:'14@s'
    },
    text:{
        fontFamily:'Poppins',
        color:'#333333',
        fontSize:'20@s'
    }
})