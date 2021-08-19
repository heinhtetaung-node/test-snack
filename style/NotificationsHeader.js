import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'

export default function NotificationsHeader() {

    const navigation = useNavigation()

    const[loaded] = useFonts({PoppinsBold})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={[styles.top, {position: 'relative', zIndex: 2}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
                <AntDesign name="arrowleft" size={scale(20)} color="#3F62A8" />
            </TouchableOpacity>
            <Text style={styles.text}>Notifications</Text>
        </View>
    )
}

const styles = ScaledSheet.create({
    top:{
        height:'47@s',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'16@s',
        backgroundColor:'#fff',
        marginBottom:'14@s',
    },
    text:{
        fontFamily:'PoppinsBold',
        color:'#3F62A8',
        fontSize:'20@s',
        paddingLeft:'26@s',
    }
})