import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { scale } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import { AntDesign } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import { useNavigation } from '@react-navigation/native'

export default function DetailHeader() {

    const navigation = useNavigation() 

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={[styles.top, {position: 'relative', zIndex: 2}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
                <AntDesign name="arrowleft" size={scale(18)} color="#3F62A8" />
            </TouchableOpacity>
            
            <Text style={styles.headerText}>Software Developer (A...</Text>
            <Fontisto name="share" size={scale(18)} color="#3F62A8" />
        </View>
    )
}

const styles = ScaledSheet.create({
    top:{
        height:'45@s',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'16@s',
    },
    headerText:{
        fontSize:'19@s',
        color:'#333333',
        fontFamily:'Poppins'
    }
})