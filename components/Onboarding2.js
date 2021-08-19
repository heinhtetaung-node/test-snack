import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { LinearGradient } from 'expo-linear-gradient'
import FirstHeader from '../style/FirstHeader'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import TopApp from '../style/HomeTop'

export default function Onboarding2({navigation}) {
    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }


    return (
        <View style={TopApp.veryFirstTop}>
            <View style={styles.container}>
                <LinearGradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                    style={styles.background}
                />    

                <View style={styles.fixed}>
                    <FirstHeader />
                    <View style={styles.paddingContainer}>
                        <View style={styles.imageCenter}>
                            <Image style={styles.oneImage} source={require('../image/vector1.png')} />
                        </View>  

                        <View style={styles.textList}>
                            <Text style={styles.headerText}>Get offer directly from companies</Text>
                            <Text style={styles.jobText}>With our scouting services, companies can look at your resume and offer you job based on their job requirements.</Text>
                        </View>

                        <View style={styles.div}>
                            <View style={styles.lines}>
                                <View style={styles.line}></View>
                                <View style={styles.line1}></View>
                                <View style={styles.line}></View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Onboarding3')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Next</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
    
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DAE2F0',
    },
    fixed:{
        flex:1,
    },
    paddingContainer:{
        paddingHorizontal:'16@s',
        flex:1
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 900,
    },
    imageCenter:{
        alignItems:'center',
        paddingTop:'24@s',
        paddingBottom:'24@s'
    },
    oneImage:{
        width:'257@s',
        height:'180@s',
    },
    textList:{
        alignItems:'center',
    },
    headerText:{
        fontSize:'15@s',
        fontWeight:'bold',
        fontFamily:'Poppins',
        textAlign:'center'
    },
    jobText:{
        paddingHorizontal:18,
        textAlign:'center',
        fontFamily:'Poppins',
        color:'#595959',
        fontSize:'11@s',
        marginTop:'13@s',
        marginBottom:'13@s'
    },
    div:{
        alignItems:'center',
    },
    lines:{
        flexDirection:'row',
    },
    line1:{
        width:'8@s',
        borderWidth:'1@s',
        borderColor:'#3F62A8',
        marginRight:'3@s'
    },
    line:{
        width:'8@s',
        borderWidth:'1@s',
        borderColor:'#BECAE1',
        marginRight:'3@s'
    },
    footer:{
        marginBottom:20
    },
    button:{
        borderRadius:4,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#003978',
        marginHorizontal:16,
    },
    buttonText:{
        color:'#fff',
        fontWeight:'500',
        fontSize:'12@s',
        textAlign:'center',
        fontFamily:'Poppins'
    }
});