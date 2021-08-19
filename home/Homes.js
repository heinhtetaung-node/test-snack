import React, { useState } from 'react'
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import HeaderBar from '../components/common/HeaderBar'
import TopApp from '../style/HomeTop'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'

export default function Homes({ navigation }) {

    const [array] = useState([
        {img: require('../image/image1.png'), title: 'Senior / System Analyst (Online Systems)', titleOne: 'DBS Bank', titleTwo: '2w ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '1' },
        {img: require('../image/image2.png'), title: 'Senior / System Analyst (Online Systems)', titleOne: 'DBS Bank', titleTwo: '2w ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '2' },
        {img: require('../image/image3.png'), title: 'Senior / System Analyst (Online Systems)', titleOne: 'DBS Bank', titleTwo: '2w ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '3' },
        {img: require('../image/image4.png'), title: 'Senior / System Analyst (Online Systems)', titleOne: 'DBS Bank', titleTwo: '2w ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '4' },
        {img: require('../image/image5.png'), title: 'Senior / System Analyst (Online Systems)', titleOne: 'DBS Bank', titleTwo: '2w ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '5' },
        {img: require('../image/image6.png'), title: 'Senior / System Analyst (Online Systems)', titleOne: 'DBS Bank', titleTwo: '2w ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '6' },
        {img: require('../image/image5.png'), title: 'Senior / System Analyst (Online Systems)', titleOne: 'DBS Bank', titleTwo: '2w ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '7' },
        {img: require('../image/image6.png'), title: 'Senior / System Analyst (Online Systems)', titleOne: 'DBS Bank', titleTwo: '2w ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '8' },
    ])

    const[loaded] = useFonts({Poppins, PoppinsMedium})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    const renderItem = ({item}) => {
        return(     
            <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate('JobDetail')}>
                    <View style={styles.inner} >
                        <View style={styles.boxImage}>
                            <View style={styles.saveImg}>
                                <Feather name="bookmark" size={scale(15)} color="black" />
                            </View>
                            
                            <View style={styles.imageContainer}>
                                <Image style={styles.companyImg} source={item.img} />
                            </View>
                        </View>
                        <Text style={styles.topBoxText}>{item.title}</Text>
                        <View style={styles.middleBoxText}>
                            <Text style={styles.middleBank}>{item.titleOne} </Text>
                            <Text style={styles.ball}></Text>
                            <Text style={styles.bottomText}>{item.titleTwo}</Text>
                        </View>
                        <View style={styles.pinAndText}>
                            <View style={styles.innerPin} >
                                <Ionicons name="ios-location-outline" size={scale(15)} color="#5776B3" />
                            </View>
                            <Text style={styles.pinText}>{item.location}</Text>
                        </View>
                        <View style={styles.yenAndText}>
                            <View style={styles.yen}>
                                <FontAwesome name="yen" size={scale(15)} color="#5776B3" />
                            </View>
                            <Text style={styles.pinText}>{item.yen}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={TopApp.veryFirstTop}>
            <HeaderBar />
            <View style={[styles.containerBar, {position: 'relative', zIndex: 2}]}>
                <ScrollView horizontal> 
                    <View style={styles.bars}>
                        <Text style={styles.bar1}>Recommended</Text>
                        <Text style={styles.bar}>Scout Offer</Text>
                        <Text style={styles.bar}>New</Text>
                        <Text style={styles.bar}>Near you</Text>
                        <Text style={styles.bar}>Salary</Text>
                        <Text style={styles.bar}>Popular industry</Text> 
                    </View>
                </ScrollView>
            </View>

            <View style={styles.container}> 
                    <FlatList 
                        numColumns={2}   
                        keyExtractor={(item) => item.key}
                        data={array}
                        renderItem={renderItem}
                    />
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    containerBar:{
        width:'100%',
    },
    bars:{
        flexDirection:'row',
        marginHorizontal:'13@s',
        alignItems:'center',
        paddingVertical:'7@s'
    },
    bar1:{
        borderWidth:1,
        padding:'5@s',
        borderRadius:'15@s',
        borderColor:'#D9D9D9',
        marginRight:'8@s',
        color:'#fff',
        backgroundColor:'#3F62A8',
        fontSize:'10@s',
        fontFamily:'Poppins'
    },
    bar:{
        borderWidth:1,
        padding:'5@s',
        borderRadius:'15@s',
        borderColor:'#D9D9D9',
        marginRight:'8@s',
        color:'#595959',
        backgroundColor:'#fff',
        fontSize:'10@s',
        fontFamily:'Poppins'
    },
    container: {
        flex:1,
        height: 'auto',
        padding: '4@s',
        flexDirection: 'row',
    },
    box: {
        flex:0.5,
        height: 'auto',
        padding: '4@s',
    },
    inner: {
        height:'auto',
        backgroundColor:'#fff',
        padding:'5@s'
    },
    saveImg:{
        position:'absolute',
        right:0,
        marginTop:'4@s',
        marginRight:'2@s'
    },
    boxImage:{
        height:'83@s',
        overflow:'hidden',
    },
    imageContainer:{
        alignItems: "center", 
        justifyContent: "center",
        flex:1,
    },
    companyImg:{
       width:'125@s',
       height:'44@s',
       resizeMode:'stretch'
    },
    topBoxText:{
        marginTop:'6@s',
        paddingHorizontal:'5@s',
        color:'#3F62A8',
        fontSize:'11@s',
        lineHeight:'17@s',
        fontFamily:'Poppins'
    },
    middleBoxText:{
        paddingTop:'14@s',
        flexDirection:'row',
        marginHorizontal:'4@s',
        alignItems:'center'
    },
    middleBank:{
        color:'#333333',
        fontSize:'10@s',
        fontFamily:'Poppins'
    },
    ball:{
        backgroundColor: '#595959',
        width:'4@s',
        height:'4@s',
        borderRadius:'25@s',
        marginHorizontal:scale(8)
    },
    bottomText:{
        color:'#595959',
        fontSize:'10@s',
        fontFamily:'Poppins'
    },
    innerPin:{
        marginRight:'10@s'
    },
    pinAndText:{
        marginTop:'16@s',
        flexDirection:'row',
        paddingHorizontal:'4@s'
    },
    pinText:{
        color:'#595959',
        fontSize:'10@s',
        fontFamily:'Poppins'
    },
    yenAndText:{
        flexDirection:'row',
        paddingHorizontal:'4@s',
        paddingTop:'10@s'
    },
    yen:{
        marginRight:'10@s',
        paddingLeft:'4@s'
    },
})