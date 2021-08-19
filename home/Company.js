import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'

export default function Company() {

    const[loaded] = useFonts({Poppins, PoppinsMedium})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <ScrollView>
            <View style={styles.main}>
                <View  style={styles.container}>
                    <Text style={styles.textHeader}>Business summary</Text>
                    <Text style={styles.textOne}>Operation of "Otakaraya", which boasts the industry's top class number of stores (1000 stores nationwide * including waiting for store openings) ◎ Stores are expanding ★ Many media (TV commercials, magazines, etc.) are published! 22 consecutive terms growing! ★ Compatible with a wide range of items such as gold / precious metals, diamonds / jewels, and brand watches</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.textHeader}>Location</Text>
                    <Text style={styles.textOne}>2-3-3 Minatomirai, Nishi-ku, Yokohama-shi, Kanagawa 220-6115 Queen's Tower B 15th floor</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.textHeader}>Established</Text>
                    <Text style={styles.textOne}>March 2000</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.textHeader}>Number of employees</Text>
                    <Text style={styles.textOne}>420 people</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.textHeader}>Capital</Text>
                    <Text style={styles.textOne}>480 million yen</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.textHeader}>Average age</Text>
                    <Text style={styles.textOne}>33 years old</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.textHeader}>Company URL</Text>
                    <Text style={styles.textOne}>www.youtube.com/bts</Text>
                </View>
            </View>
        </ScrollView>  
    )
}


const styles = ScaledSheet.create({
    main:{
        marginBottom:'60@s'
    },
    container:{
        backgroundColor:'#fff',
        padding:'12@s'
    },
    textHeader:{
        fontFamily:'PoppinsMedium',
        fontSize:'12@s',
        paddingBottom:'6@s'
    },
    textOne:{
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
})