import * as React from 'react'
import { View, Text, Image } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import DetailHeader from '../style/DetailHeader'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { FontAwesome } from '@expo/vector-icons'
import Job from './Job'
import Company from './Company'
import TopApp from '../style/HomeTop'

const Tab = createMaterialTopTabNavigator()

export default function JobDetail() {

    const[loaded] = useFonts({Poppins, PoppinsMedium})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <>
            <View style={TopApp.veryFirstTop}>
                <DetailHeader />
                <View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.companyImg} source={require('../image/image1.png')} />
                    </View>

                    <View style={styles.containerText}>
                        <Text style={styles.text1}>Software Developer (Automation Control)</Text>
                        <Text style={styles.text2}>Toshiba Co., Ltd.</Text>

                        <View style={styles.text3Container}>
                            <Text style={styles.text3}>Full time position</Text>
                            <Text style={styles.text3}>Posted on 1-Jan-2021</Text>
                        </View>             
                    </View>
                </View>
                
                <Tab.Navigator
                    tabBarOptions= {{
                        activeTintColor: "#3F62A8", 
                        inactiveTintColor: "#595959", 
                    
                        indicatorStyle :{
                            backgroundColor:'#3F62A8'
                        },

                        labelStyle:{
                            fontSize: scale(11),
                            fontFamily:'Poppins',
                            paddingVertical:scale(5)
                        },

                        style: {
                            shadowOpacity: 0,
                        }
                    }} 
                >
                    <Tab.Screen name="Job Details" component={Job} />
                    <Tab.Screen name="Company overview" component={Company} />
                </Tab.Navigator>
                    

                <View style={{backgroundColor:'#fff', width: '100%', height: scale(54), position:'absolute', bottom:0, left:0, zIndex:999}}>
                    <View style={styles.button}>
                        <View style={styles.containerButton}>
                            <View style={styles.buttonPrevious}>
                                <FontAwesome name="bookmark-o" size={scale(18)} color="#F27E34" />
                                <Text style={styles.textJob}>Save Job</Text>
                            </View>
                        </View>
                        <View style={styles.containerButton}>
                            <View style={styles.applyButton}>
                                <Text style={styles.applyJob}>Apply Now</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = ScaledSheet.create({
    imageContainer:{
        height:'86@s',
        overflow:'hidden',
        alignItems: "center", 
        justifyContent: "center"
    },
    companyImg:{
        width:'125@s',
        height:'44@s',
        resizeMode:'cover'
    },
    containerText:{
        paddingHorizontal:'13@s',
    },
    text1:{
        fontFamily:'PoppinsMedium',
        paddingTop:'10@s',
        fontSize:'12@s'
    },
    text2:{
        paddingTop:'4@s',
        fontFamily:'Poppins',
        fontSize:'12@s',
        color:'#333333'
    },
    text3Container:{
        paddingTop:'10@s',
        paddingBottom:'10@s'
    },
    text3:{
        color:'#595959',
        fontSize:'10@s',
        fontFamily:'Poppins',
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        paddingVertical:'10@s'
    },
    containerButton:{
        width:'49%'
    },
    buttonPrevious:{
        fontWeight:'500',
        textAlign:'center',
        borderRadius:4,
        borderWidth:2,
        borderColor:'#F27E34',
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:'6@s'
    },
    textJob:{
        color:'#F27E34',
        paddingLeft:'7@s',
        fontFamily:'Poppins',
        fontSize:'12@s',
    },
    applyButton:{
        textAlign:'center',
        backgroundColor:'#003978',
        borderRadius:4,
        paddingVertical:'7@s',
    },
    applyJob:{
        color:'#fff',
        fontSize:'12@s',
        textAlign:'center',
        fontFamily:'Poppins',
    }
})