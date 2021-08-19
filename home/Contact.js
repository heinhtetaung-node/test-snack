import React from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import ContactHeader from '../style/ContactHeader'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import TopApp from '../style/HomeTop'

export default function Contact() {

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={TopApp.veryFirstTop}>
                <ScrollView contentContainerStyle={{ 
                    flexGrow: 1, 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    backgroundColor:'#F5F5F5'
                }}>
                    <View style={styles.top}>
                        <ContactHeader />
                        <View style={styles.body}>
                            <Text style={styles.bodyText}>Contact information</Text>
                            
                            <View style={styles.bodyContainer}>
                                <View style={styles.inputButtom}>
                                    <Text style={styles.nameText}>Fist name</Text>
                                    <TextInput placeholder={'Jhon'} style={styles.JhonInput} />
                                </View>
                                
                                <View style={styles.inputButtom}>
                                    <Text style={styles.nameText}>Surname</Text>
                                    <TextInput placeholder={'Cena'} style={styles.JhonInput} />
                                </View>

                                <TextInput placeholder={'Surname'} style={styles.input} />

                                <TextInput placeholder={'Mei'} style={styles.input} />
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
            </View>
        </TouchableWithoutFeedback>
        
    )
}


const styles = ScaledSheet.create({
    body:{
        padding:16,
        backgroundColor:'#fff'
    },
    bodyText:{
        fontSize:'12@s',
        fontFamily:'Poppins'
    },
    bodyContainer:{
        marginTop:'14@s',
    },
    nameText:{
        position:'absolute',
        backgroundColor: '#fff',
        width:'50@s',
        marginTop:'-6@s',
        zIndex: 999,
        paddingLeft:'2@s',
        marginHorizontal:'14@s',
        fontSize:'9@s',
        color:'#ddd',
        fontFamily:'Poppins'
    },
    JhonInput:{
		paddingHorizontal: '14@s',
		borderWidth: 2,
		borderColor: '#ddd',
        borderRadius:4,
        height:'43@s',
        fontSize:'11@s',
        fontFamily:'Poppins',
    },
    inputButtom:{
        marginBottom:'14@s'
    },
    input:{
        borderWidth: 1,
        height:'36@s',
        borderColor:'#bbb',
        borderRadius:4,
        marginBottom:'6@s',
        paddingLeft:15,
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
    footerButtom:{
        width:'100%',
        marginBottom:20,
        paddingTop:'50@s'
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