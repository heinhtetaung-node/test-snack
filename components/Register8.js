import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import HeaderFlag from '../style/HeaderFlag'
import { scale, ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import { AntDesign } from '@expo/vector-icons'

export default function Register8({navigation}) {

    const [shouldShow, setShouldShow] = useState(true)
    const [tripleShow, setTripleShow] = useState(true)
    
    const[loaded] = useFonts({Poppins, PoppinsMedium})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <ScrollView contentContainerStyle={{ 
                flexGrow: 1, 
                flexDirection: 'column', 
                justifyContent: 'space-between'
            }}>
                <View>
                    <HeaderFlag />
                    <View style={styles.container}>
                        <View style={styles.lineText}>
                            <Text style={styles.fontLine}>Sign Up</Text>
                            <View style={styles.lines}>
                                <View style={styles.line1}></View>
                                <View style={styles.line1}></View>
                                <View style={styles.line1}></View>
                                <View style={styles.line1}></View>
                                <View style={styles.line1}></View>
                                <View style={styles.line1}></View>
                                <View style={styles.line1}></View>
                                <View style={styles.line1}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                            </View>
                        </View>

                        <Text style={styles.textOne}>Please select your occupation</Text>

                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Sales position</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Sales/service staff</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Office / assistant</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Planning and management</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Technical job (mechanical/electrical)</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        {/* Triple dropdown menu */}
                        <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                            <View style={styles.selectTop}>
                                <Text style={styles.selectText}>Technical staff (SE, infrastructure engineer,...)</Text>
                                <AntDesign name="down" size={scale(12)} color="black" />
                            </View>
                        </TouchableOpacity>
                            {/* double */}
                            {
                                shouldShow ? (
                                    <TouchableOpacity onPress={() => setTripleShow(!tripleShow)}>
                                        <View style={styles.doubleSelect}>
                                            <Text style={styles.selectText}>Real estate development</Text>
                                            <AntDesign name="down" size={scale(12)} color="black" />
                                        </View>
                                    </TouchableOpacity>  
                                ) : null
                            }
                            {/* double */}
                            {/* triple */}
                            {
                                tripleShow ? (
                                    <View>
                                        <View style={styles.tripleSelect}>
                                            <Text style={styles.selectText}>Real estate development</Text>
                                        </View>
                                        <View style={styles.tripleSelect}>
                                            <Text style={styles.selectText}>Real estate development</Text>
                                        </View>
                                    </View>
                                ) :null
                            }
                            {/* triple */}
                        {/* Triple dropdown menu */}
                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Technical staff (chemistry, materials, cos...)</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Technical position (food, spice, feed)</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Technical job (embedded software)</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Medical profession</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Civil servants, teachers, agriculture, forestry...</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        <View style={styles.selectTop}>
                            <Text style={styles.selectText}>Professionals (consulting farm,  specialize...)</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>
                        <View style={styles.selectTopEnd}>
                            <Text style={styles.selectText}>Financial profession</Text>
                            <AntDesign name="down" size={scale(12)} color="black" />
                        </View>

                        <Text style={styles.textTwo}>Please enter your annual income</Text>

                        <TextInput placeholder={'Enter amount'} style={styles.input} />
                    </View>            
                </View>
                <View style={styles.footerButtom}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonPrevious}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('Register9')}>
                            <Text style={styles.buttonNext}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}


const styles = ScaledSheet.create({
    container:{
        paddingHorizontal:'14@s'
    },
    lineText:{
        marginTop:'18@s',
    },
    fontLine:{
        fontSize:'13@s',
        paddingBottom:'13@s',
        fontFamily:'PoppinsMedium'
    },
    lines:{
        flexDirection:'row',
    }, 
    line1:{
        width:'20@s',
        borderWidth:1,
        borderColor:'#F27E34',
        marginRight:'3@s'
    }, 
    line:{
        width:'20@s',
        borderWidth:1,
        borderColor:'#BFBFBF',
        marginRight:'3@s'
    },
    textOne:{
        marginTop:'30@s',
        marginBottom:'14@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },  
    selectTop:{
        width:'100%',
        height:'46@s',
        backgroundColor:'#FAFAFA',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'14@s',
        borderBottomWidth:1,
        borderColor:'#E9E9E9'
    },
    doubleSelect:{
        width:'95%',
        height:'46@s',
        backgroundColor:'#FAFAFA',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'14@s',
        borderBottomWidth:1,
        borderColor:'#E9E9E9',
        alignSelf:'flex-end'
    },
    tripleSelect:{
        width:'90%',
        height:'46@s',
        backgroundColor:'#FAFAFA',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'14@s',
        borderBottomWidth:1,
        borderColor:'#E9E9E9',
        alignSelf:'flex-end'
    },
    selectTopEnd:{
        width:'100%',
        height:'46@s',
        backgroundColor:'#FAFAFA',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'14@s',
    },
    selectText:{
        fontSize:'11@s',
        fontFamily:'Poppins'
    },
    textTwo:{
        marginTop:'30@s',
        marginBottom:'14@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
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
        marginTop:'50@s',
        marginBottom:20,
        paddingHorizontal:'14@s'
    },
    button:{
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