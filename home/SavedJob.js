import React, {useState} from 'react'
import { View, Text, Image, Dimensions, FlatList } from 'react-native'
import SaveJobHeader from '../style/SaveJobHeader'
import { scale, ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import TopApp from '../style/HomeTop'

export default function SavedJob() {

    const [array] = useState([
        {img: require('../image/image1.png'), title: 'Oracle system analyst', titleOne: 'Marina bay', titleTwo: '4d ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '1' },
        {img: require('../image/image2.png'), title: 'Oracle system analyst', titleOne: 'Marina bay', titleTwo: '4d ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '2' },
        {img: require('../image/image3.png'), title: 'Oracle system analyst', titleOne: 'Marina bay', titleTwo: '4d ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '3' },
        {img: require('../image/image4.png'), title: 'Oracle system analyst', titleOne: 'Marina bay', titleTwo: '4d ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '4' },
        {img: require('../image/image5.png'), title: 'Oracle system analyst', titleOne: 'Marina bay', titleTwo: '4d ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '5' },
        {img: require('../image/image6.png'), title: 'Oracle system analyst', titleOne: 'Marina bay', titleTwo: '4d ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '6' },
        {img: require('../image/image1.png'), title: 'Oracle system analyst', titleOne: 'Marina bay', titleTwo: '4d ago', location: 'Edogawa-ku, japan', yen:'550 Million yen per year', key: '7' },
    ])

    const[loaded] = useFonts({Poppins, PoppinsMedium})

    const renderItem = ({item}) => {
        return(
            <View style={styles.rowStyle}>
                <View style={styles.left}>
                    <FontAwesome style={styles.logo} name="bookmark" size={scale(15)} color="#3F62A8" />
                    <View style={styles.img}>
                        <Image style={styles.imgLeft} source={item.img} />
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={styles.topTextContainer}>
                        <Text style={styles.topText}>{item.title}</Text>
                    </View>
                    <View>
                        <View style={styles.leftRight}>
                            <Text style={styles.bottomLeft}>{item.titleOne}</Text>
                            <Text style={styles.ball}></Text>
                            <Text style={styles.bottomRight}>{item.titleTwo}</Text>
                        </View>

                        <View style={styles.locationAndYen}>
                            <View style={styles.innerPin} >
                                <Ionicons name="ios-location-outline" size={scale(15)} color="#5776B3" />
                            </View>
                            <Text style={styles.pinText}>{item.location}</Text>
                        </View>
                        <View style={styles.locationAndYen}>
                            <View style={styles.yen}>
                                <FontAwesome name="yen" size={scale(15)} color="#5776B3" />
                            </View>
                            <Text style={styles.pinText}>{item.yen}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={TopApp.veryFirstTop}>
            <View style={styles.firstTop}>
                <SaveJobHeader />
                <View style={styles.container}>
                    <FlatList   
                        keyExtractor={(item) => item.key}
                        data={array}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    firstTop:{
        flex:1,
        backgroundColor:'#F5F5F5'
    },
    container:{
        flex:1
    },
    rowStyle:{
        flexDirection:'row',
        height:'120@s',
        marginHorizontal:'14@s',
        marginVertical:'4@s',
        backgroundColor:'#fff'
    },
    left:{
        width:(Dimensions.get('window').width / 3),
    },
    logo:{
        position:'absolute',
        left:'6@s',
        top:'6@s'
    },
    img:{
        alignItems: "center", 
        justifyContent: "center",
        flex:1,
    },
    imgLeft:{
        width:'100@s',
        height:'44@s',
        resizeMode:'stretch'
    },
    right:{
        width:(Dimensions.get('window').width / 1.5),
        paddingLeft:'14@s',
        paddingTop:'6@s'
    },
    topTextContainer:{
        height:42,
    },
    topText:{
        fontFamily:'Poppins',
        fontSize:'12@s',
        color:'#3F62A8'
    },
    leftRight:{
        flexDirection:'row',
        alignItems:'center'
    },
    ball:{
        backgroundColor: '#595959',
        width:'4@s',
        height:'4@s',
        borderRadius:'25@s',
    },
    bottomLeft:{
        color:'#333',
        fontSize:'10@s',
        fontFamily:'Poppins',
        paddingRight:'6@s'
    },
    bottomRight:{
        color:'#595959',
        fontSize:'10@s',
        fontFamily:'Poppins',
        paddingLeft:'6@s'
    },
    locationAndYen:{
        flexDirection:'row',
        paddingTop:'8@s'
    },
    pinText:{
        color:'#595959',
        fontFamily:'Poppins',
        fontSize:'10@s',
        paddingLeft:'7@s'
    }
})
