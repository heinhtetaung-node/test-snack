import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import NotificationsHeader from '../style/NotificationsHeader'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'
import TopApp from '../style/HomeTop'

export default function Notifications() {

    const[loaded] = useFonts({Poppins, PoppinsMedium, PoppinsBold})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={TopApp.veryFirstTop}>
            <View style={styles.top}>
                <NotificationsHeader />
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.textBar}>
                            <Text style={styles.textOne}>You got one new scout offer from Samsung</Text>
                            <Text style={styles.textTwo}>We have looked at you resume and we would like to arrange an interview with you and our project mana...</Text>
                            <Text style={styles.textThree}>1hr ago</Text>
                        </View>

                        <View style={styles.textBar}>
                            <Text style={styles.textOne}>Philip signapore has posted a new job. Check it out ...</Text>
                            <Text style={styles.textTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A commodo, tellus, semper dictum. Aliquam.</Text>
                            <Text style={styles.textThree}>5hrs ago</Text>
                        </View>

                        <View style={styles.textBar}>
                            <Text style={styles.textTwo}>Maecenas sed.</Text>
                            <Text style={styles.textTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A commodo, tellus, semper dictum. Aliquam.</Text>
                            <Text style={styles.textThree}>Yesterday</Text>
                        </View>

                        <View style={styles.textBar}>
                            <Text style={styles.textTwo}>Sapien turpis.</Text>
                            <Text style={styles.textTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A commodo, tellus, semper dictum. Aliquam.</Text>
                            <Text style={styles.textThree}>A week ago</Text>
                        </View>

                        <View style={styles.textBar}>
                            <Text style={styles.textTwo}>Vitae egestas.</Text>
                            <Text style={styles.textTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A commodo, tellus, semper dictum. Aliquam.</Text>
                            <Text style={styles.textThree}>5/Jun/</Text>
                        </View>

                        <View style={styles.textBar}>
                            <Text style={styles.textTwo}>Vitae egestas.</Text>
                            <Text style={styles.textTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A commodo, tellus, semper dictum. Aliquam.</Text>
                            <Text style={styles.textThree}>5/Jun/</Text>
                        </View>

                        <View style={styles.textBar}>
                            <Text style={styles.textTwo}>Etiam pellentesque.</Text>
                            <Text style={styles.textTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A commodo, tellus, semper dictum. Aliquam.</Text>
                            <Text style={styles.textThree}>28/May</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    top:{
        flex:1
    },
    container:{
        paddingHorizontal:16
    },
    textBar:{
        paddingBottom:'28@s'
    },
    textOne:{
        fontFamily:'PoppinsBold',
        fontSize:'12@s',
        paddingBottom:'2@s'
    },
    textTwo:{
        color:'#595959',
        fontSize:'12@s',
        paddingBottom:'2@s',
        fontFamily:'Poppins'
    },
    textThree:{
        color:'#595959',
        fontSize:'10@s',
        fontFamily:'Poppins'
    }
})