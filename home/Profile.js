import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import ProfileHeader from '../style/ProfileHeader'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import { AntDesign } from '@expo/vector-icons'
import TopApp from '../style/HomeTop'

export default function Profile({navigation}) {

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={TopApp.veryFirstTop}>
            <View style={styles.top}>
                <ProfileHeader />
                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                    <View style={styles.midContainer}>
                        <Text style={styles.midText}>Name and contact information</Text>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Education')}>
                    <View style={styles.midContainer}>
                        <Text style={styles.midText}>Education</Text>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('AboutJob')}>
                    <View style={styles.midContainer}>
                        <Text style={styles.midText}>About job</Text>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Experience')}>
                    <View style={styles.midContainer}>
                        <Text style={styles.midText}>About work experience</Text>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('LangugeSkill')}>
                    <View style={styles.midContainer}>
                        <Text style={styles.midText}>Language</Text>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('OtherSkill')}>
                    <View style={styles.midContainer}>
                        <Text style={styles.midText}>Other skill</Text>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Qualification')}>
                    <View style={styles.midContainer}>
                        <Text style={styles.midText}>Qualification</Text>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('PR')}>
                    <View style={styles.midContainer}>
                        <Text style={styles.midText}>PR</Text>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePicAndRe')}>
                    <View style={styles.midContainer}>
                        <Text style={styles.midText}>Profile image and resume</Text>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = ScaledSheet.create({
    top:{
        flex:1,
        backgroundColor:'#F5F5F5'
    },
    midContainer:{
        height:'40@s',
        backgroundColor:'#fff',
        paddingHorizontal:'14@s',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'#F5F5F5'
    },
    midText:{
        fontFamily:'Poppins',
        fontSize:'11@s'
    }

})