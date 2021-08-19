import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import MailsDetailHeader from '../style/MailsDetailHeader'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'

export default function MailsDetail() {

    const[loaded] = useFonts({Poppins, PoppinsBold})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
    <View style={{flex:1}}>   
        <View style={{flex:1}}>
            <MailsDetailHeader />
            <View style={styles.innerContainer}>
                <Text style={styles.textTop}>Interview Arrangement for the second round through zoom</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.textThree}>ABC Company</Text>
                    <Text style={styles.textFour}></Text>
                    <Text style={styles.textThree}>1hr ago</Text>
                </View>
            
                <Text style={styles.textLorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices semper euismod vivamus amet, ut praesent malesuada pretium, adipiscing. Nulla nisi, blandit id nunc. Erat feugiat ullamcorper bibendum at et quam. </Text>
                <Text style={styles.textLorem}>Lorem Amet lacinia maecenas morbi pulvinar sed. Id aenean eget vulputate vulputate. Vel sit sed eu elementum vel adipiscing cras vitae. Integer dictum cras est, nunc, volutpat erat mi. Venenatis aliquam.</Text>
            
                <View style={styles.contactInfo}>
                    <View style={styles.contactContainer}>
                        <Text style={styles.contactOne}>Date & Time :</Text>
                        <Text style={styles.contactTwo}>20/Jun 2:00 PM</Text>
                    </View>
                    <View style={styles.contactContainer}>
                        <Text style={styles.contactOne}>Email:</Text>
                        <Text style={styles.contactTwo}>jopinjapan@gmail.com</Text>
                    </View>
                    <View style={styles.contactContainer}>
                        <Text style={styles.contactOne}>Contact:</Text>
                        <Text style={styles.contactTwo}>+959-123456789</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Back</Text>
            </View>
        </View>
    </View> 
    )
}

const styles = ScaledSheet.create({
    innerContainer:{
        paddingHorizontal:'14@s'
    },
    textTop:{
        fontFamily:'Poppins',
        fontSize:'14@s'
    },
    textContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    textThree:{
        fontFamily:'Poppins',
        fontSize:'11@s',
        color:'#595959'
    },
    textFour:{
        width:'3@s',
        height:'3@s',
        borderRadius:'24@s',
        backgroundColor:'#595959',
        marginHorizontal:'6@s'
    },
    textLorem:{
        paddingTop:'20@s',
        color:'#595959',
        fontFamily:'Poppins',
    },
    contactInfo:{
        paddingTop:'20@s',
    },
    contactContainer:{
        flexDirection:'row',
        paddingBottom:'6@s'
    },
    contactOne:{
        color:'#595959',
        fontFamily:'Poppins',
        fontSize:'11@s',
        width:(Dimensions.get('window').width / 4),
    },
    contactTwo:{
        color:'#595959',
        fontFamily:'Poppins',
        fontSize:'11@s',
        width:(Dimensions.get('window').width / 1.5),
    },
    footer:{
        marginBottom:20
    },
    button:{
        borderRadius:4,
        paddingVertical:'11@s',
        paddingHorizontal:'9@s',
        marginHorizontal:'14@s',
        borderWidth:'2@s',
        borderColor:'#FAFAFA'
    },
    buttonText:{
        color:'#6D6D6D',
        fontSize:'12@s',
        textAlign:'center',
        fontFamily:'Poppins'
    },
})