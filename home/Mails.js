import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import MailsHeader from '../style/MailsHeader'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'
import TopApp from '../style/HomeTop'

export default function Mails() {

    const[loaded] = useFonts({Poppins, PoppinsMedium, PoppinsBold})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={TopApp.veryFirstTop}>
            <View style={styles.container}>
                <MailsHeader />
                <ScrollView>
                    <View style={styles.innerContainer}>
                        <View style={styles.textBottom}>
                            <Text style={styles.textOne}>Interview arrangement</Text>
                            <Text style={styles.textTwo}>We have looked at you resume and we would like to arrange an interview with you and our project mana...</Text>
                            <View style={styles.textContainer}>
                                <Text style={styles.textThree}>ABC Company</Text>
                                <Text style={styles.textFour}></Text>
                                <Text style={styles.textThree}>1hr ago</Text>
                            </View>
                        </View>   

                        <View style={styles.textBottom}>
                            <Text style={styles.textOne}>Blandit velit tincidunt if there is more, it will be like th...</Text>
                            <Text style={styles.textTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A commodo, tellus, semper dictum. Aliquam.</Text>
                            <View style={styles.textContainer}>
                                <Text style={styles.textThree}>ABC Company</Text>
                                <Text style={styles.textFour}></Text>
                                <Text style={styles.textThree}>5hrs ago</Text>
                            </View>
                        </View> 

                        <View style={styles.textBottom}>
                            <Text style={styles.textTwo}>In mauris egestas.</Text>
                            <Text style={styles.textTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A commodo, tellus, semper dictum. Aliquam.</Text>
                            <View style={styles.textContainer}>
                                <Text style={styles.textThree}>ABC Company</Text>
                                <Text style={styles.textFour}></Text>
                                <Text style={styles.textThree}>yesterday</Text>
                            </View>
                        </View> 

                        <View style={styles.textBottom}>
                            <Text style={styles.textTwo}>Tortor malesuada.</Text>
                            <Text style={styles.textTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A commodo, tellus, semper dictum. Aliquam.</Text>
                            <View style={styles.textContainer}>
                                <Text style={styles.textThree}>ABC Company</Text>
                                <Text style={styles.textFour}></Text>
                                <Text style={styles.textThree}>a week ago</Text>
                            </View>
                        </View> 

                        <View style={styles.textBottom}>
                            <Text style={styles.textTwo}>Eleifend aliquam.</Text>
                            <Text style={styles.textTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A commodo, tellus, semper dictum. Aliquam.</Text>
                            <View style={styles.textContainer}>
                                <Text style={styles.textThree}>ABC Company</Text>
                                <Text style={styles.textFour}></Text>
                                <Text style={styles.textThree}>5/Jun/</Text>
                            </View>
                        </View>     
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        flex:1,
    },
    innerContainer:{
        paddingHorizontal:'14@s',
        paddingTop:'9@s'
    },
    textBottom:{
        marginBottom:'26@s'
    },
    textOne:{
        fontFamily:'PoppinsBold',
        fontSize:'11@s',
        paddingBottom:'4@s'
    },
    textTwo:{
        fontFamily:'PoppinsMedium',
        fontSize:'11@s',
        color:'#595959',
        paddingBottom:'4@s'
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
    }
})