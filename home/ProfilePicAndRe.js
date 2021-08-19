import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import ProfilePicAndReHeader from '../style/ProfilePicAndReHeader'

export default function ProfilePicAndRe() {

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <ScrollView contentContainerStyle={{ 
            flexGrow: 1, 
            flexDirection: 'column', 
            justifyContent: 'space-between',
        }}>
            <View>
                <View style={styles.profileContainer}>
                    <ProfilePicAndReHeader />
                    <View style={styles.body}>
                        <Text style={styles.bodyText}>Add files</Text>

                        <View style={styles.bodyContainer}>
                            <Image style={styles.imgProfile} source={require('../image/proC.png')} />

                            <Text style={styles.profileText}>Profile picture</Text>

                            <View style={styles.cvBoder}>
                                <Image style={styles.cvImage} source={require('../image/cv.png')}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.footerButtom}>
                <View style={styles.button}>
                    <View style={styles.containerButton}>
                        <Text style={styles.buttonPrevious}>Cancel</Text>
                    </View>
                                
                    <View style={styles.containerButton}>
                        <Text style={styles.buttonNext}>Update</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = ScaledSheet.create({
    profileContainer:{
        backgroundColor:'#F5F5F5'
    },
    body:{
        padding:'14@s',
        backgroundColor:'#fff'
    },
    bodyText:{
        fontSize:'12@s',
        fontFamily:'Poppins',
        paddingBottom:'14@s'
    },
    bodyContainer:{
        alignItems:'center'
    },
    imgProfile:{
        width:'149@s',
        height:'150@s',
        borderRadius:'30@s',
    },
    profileText:{
        paddingTop:'7@s',
        fontSize:'12@s',
        fontFamily:'Poppins',
        paddingBottom:'27@s'
    },
    cvBoder:{
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:'#bbb',
        borderRadius:10,
        paddingVertical:'15@vs',
        paddingHorizontal:'30@s',
        backgroundColor:'#FAFAFA'
    },
    cvImage:{
        width:'100@s',
        height:'150@vs'
    },
    footerButtom:{
        width:'100%',
        marginBottom:20
    },
    button:{
        paddingHorizontal:'14@s',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    containerButton:{
        width:'49%'
    },
    buttonPrevious:{
        color:'#595959',
        fontWeight:'500',
        fontSize:'12@s',
        textAlign:'center',
        backgroundColor:'#fff',
        borderRadius:4,
        borderWidth:2,
        borderColor:'#bbb',
        paddingVertical:'9@s',
    },
    buttonNext:{
        color:'#fff',
        fontWeight:'500',
        fontSize:'12@s',
        textAlign:'center',
        backgroundColor:'#003978',
        borderRadius:4,
        paddingVertical:'11@s',
    }
})