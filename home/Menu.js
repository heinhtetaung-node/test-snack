import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import MenuHeader from '../style/MenuHeader'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import { AntDesign } from '@expo/vector-icons'
import TopApp from '../style/HomeTop'

export default function Menu({navigation}) {
    
    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <ScrollView contentContainerStyle={{ 
            flexGrow: 1, 
            flexDirection: 'column', 
            justifyContent: 'space-between'
        }}>
            <View style={styles.top}>
                <MenuHeader/>
                <View style={styles.body}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <View style={styles.profile}>
                            <View style={styles.profileContainer}>
                                <Image style={styles.profileImg} source={require('../image/profile.png')} />
                                <View style={styles.profileName}>
                                    <Text style={styles.userName}>Makenna Carder</Text>
                                    <Text style={styles.userManage}>Manage your profile</Text>
                                </View>
                            </View>
                            <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.middleBody}>
                        <TouchableOpacity onPress={() => navigation.navigate('Language')}>
                            <View style={styles.midContainer}>
                                <Text style={styles.midText}>Language</Text>
                                <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassWorld3')}>
                            <View style={styles.midContainer}>
                                <Text style={styles.midText}>Change password</Text>
                                <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.midContainer}>
                            <Text style={styles.midText}>About us</Text>
                            <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                        </View>
                        <View style={styles.midContainer}>
                            <Text style={styles.midText}>Contact us</Text>
                            <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                        </View>
                        <View style={styles.midContainer}>
                            <Text style={styles.midText}>Privacy policy</Text>
                            <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                        </View>
                        <View style={styles.midContainer}>
                            <Text style={styles.midText}>Terms and conditions</Text>
                            <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                        </View>
                    </View>

                    <View style={styles.logout}>
                        <View style={styles.logContainer}>
                            <Text style={styles.midText}>Log out</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>App version</Text>
                <Text style={styles.footerText}>1.0.1</Text>
            </View>
        </ScrollView>
    )
}


const styles = ScaledSheet.create({
    top:{
        backgroundColor:'#F5F5F5',
        flex:1
    },
    profile:{
        height:'58@s',
        backgroundColor:'#fff',
        paddingHorizontal:'14@s',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profileContainer:{
        flexDirection:'row',
    },
    profileImg:{
        width:'40@s',
        height:'40@s',
        borderRadius:'30@s',
    },
    profileName:{
        marginLeft:16
    },
    userName:{
        fontSize:'11@s',
        fontFamily:'Poppins'
    },
    userManage:{
        fontSize:'9@s',
        color:'#3F62A8',
        fontFamily:'Poppins'
    },
    middleBody:{
        paddingTop:'8@s'  
    },
    midContainer:{
        height:'40@s',
        backgroundColor:'#fff',
        paddingHorizontal:'14@s',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:'#F5F5F5'
    },
    midText:{
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
    logout:{
        paddingTop:'8@s',
    },
    logContainer:{
        height:'40@s',
        backgroundColor:'#fff',
        paddingHorizontal:'14@s',
        justifyContent:'center'
    },
    footer:{
        paddingTop:'10@s',
        paddingBottom:'10@s',
        alignItems:'center',
        backgroundColor:'#F5F5F5',
    },
    footerText:{
        color:'#595959',
        fontSize:'9@s',
        fontFamily:'Poppins'
    }
})