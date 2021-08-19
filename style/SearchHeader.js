import React from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'

export default function SearchHeader() {

    const[loaded] = useFonts({Poppins, PoppinsMedium})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={styles.top}>
            <Text style={styles.textOne}>Details search</Text>
            <Text style={styles.textTwo}>History</Text>
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
        paddingHorizontal:'16@s'
    },
    textOne:{
        color:'#3F62A8',
        fontFamily:'PoppinsMedium',
        fontSize:'20@s',
    },
    textTwo:{
        color:'#3F62A8',
        fontSize:'12@s',
        fontFamily:'Poppins',
    }
})