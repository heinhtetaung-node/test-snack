import React, { useState } from 'react'
import { Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Logo from '../image/JIJ-02.png'
import Group from '../image/Group.png'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import Modal from 'react-native-modal'
import { RadioButton } from 'react-native-paper'

export default function LogIn ({navigation}) {

    const [checked, setChecked] = React.useState('one')

    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (                
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.BottomLogoAndText}>
                        <Image style={styles.BottomLogo} source={Logo} />
                        <View style={styles.flagAndText}>
                        <TouchableOpacity onPress={toggleModal}>
                            <Image style={styles.flagImg} source={Group} />
                        </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.BottomText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>  
                    </View>
                </View>

                <Modal isVisible={isModalVisible}>
                    <View style={{flex: 1, justifyContent:'flex-end'}}>
                        <View style={styles.viewTop}>
                            <Text style={styles.topSelect}>Choose app language</Text>
                        </View>
                        <View>
                            <View style={styles.radioContainer}>
                                <Text style={styles.radioText}>English</Text>
                                <RadioButton
                                    value="one"
                                    status={ checked === 'one' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('one')}
                                />
                            </View>
                            <View style={styles.radioContainer}>
                                <Text style={styles.radioText}>Japan</Text>
                                <RadioButton
                                    value="two"
                                    status={ checked === 'two' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('two')}
                                />
                            </View>
                            <View style={styles.radioContainer}>
                                <Text style={styles.radioText}>Myanmar</Text>
                                <RadioButton
                                    value="three"
                                    status={ checked === 'three' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('three')}
                                />
                            </View>
                        </View>

                        <TouchableOpacity onPress={toggleModal}>
                            <View style={styles.cancelView}>
                                <Text style={styles.cancel}>Cancel</Text>
                            </View>
                        </TouchableOpacity>   
                    </View>
                </Modal>

                <View style={styles.containerTop}>
                    <View style={styles.signInMain}>
                        <Text style={styles.signInText1}>Sign In</Text>
                        <Text style={styles.signInText2}>You need to sign in to access some features.</Text>

                        <View style={styles.signInInputAndPass}>
                            <Text style={styles.emailText}>Email</Text>
                            <TextInput placeholder={'someone@gmail.com'} style={styles.input} />

                            <TextInput placeholder={'Password'} style={styles.inputPassword} />

                            <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Sign In</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.endText}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassWorld')}>
                            <Text style={styles.ended}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </View>
        </TouchableWithoutFeedback>
    )    
}


const styles = ScaledSheet.create({
    container:{
        flex:1
    },  
    containerTop:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    signInMain:{
        width:'100%',
        paddingHorizontal:'14@s'
    },
    top:{
        marginTop:'26@s'
    },
    BottomLogoAndText:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:56,
        marginHorizontal:'13@s',      
        alignItems:'center'
    },
    BottomLogo:{
        width: '130@s',
        height: '22@s',
    },
    flagAndText:{
        flexDirection:'row',
    },
    flagImg:{
        width:'25@s',
        height:'25@s',
        borderRadius:'30@s',
        marginRight:24
    },
    BottomText:{
        paddingTop:'3@s',
        fontSize:'11@s',
        color:'#595959',
        fontFamily:'Poppins'
    },
    emailText:{
        position: 'absolute',
        backgroundColor: '#fff',
        width:'30@s',
        marginTop:'-6@s',
        zIndex: 999,
        paddingLeft:'2@s',
        marginHorizontal:16,
        fontSize:'9@s',
        color:'#3F62A8',
        fontFamily:'Poppins'
    },
    input:{
		paddingHorizontal: 16,
		borderWidth: 2,
		borderColor: '#3F62A8',
        borderRadius:6,
        height:'54@s',
        marginBottom:'6@s',
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
    inputPassword:{
		paddingHorizontal: 16,
		borderWidth: 2,
		borderColor: '#bbb',
        borderRadius:6,
        height:'54@s',
        marginBottom:'26@s',
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
    signInInputAndPass:{
        marginTop:'25@s'
    },
    button:{
        borderRadius:4,
        paddingVertical:'11@s',
        paddingHorizontal:10,
        backgroundColor:'#003978',
    },
    buttonText:{
        color:'#fff',
        fontWeight:'500',
        fontSize:'11@s',
        textAlign:'center',
        fontFamily:'Poppins'
    },
    signInText1:{
        marginBottom:'5@s',
        fontSize:'20@s', 
        fontFamily:'Poppins'
    },
    signInText2:{
        fontSize:'11@s',
        color:'#595959',
        fontFamily:'Poppins'
    },
    footer:{
        width:'100%',
        marginTop:'40@s'
    },
    endText:{
        color: '#595959',
        lineHeight:21,
        marginBottom:20
    },
    ended:{
        fontSize:'11@s',
        textAlign:'center',
        fontFamily:'Poppins'
    },
    viewTop:{
        height:'48@s',
        backgroundColor:'#fff',
        justifyContent:'center',
        paddingLeft:'13@s'
    },
    radioContainer:{
        flexDirection:'row',
        borderBottomWidth:2,
        borderColor:'#F5F5F5',
        backgroundColor:'#fff',
        height:'37@s',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:'14@s'
    },
    radioText:{
        color:'#595959',
        fontSize:'11@s',
        fontFamily:'Poppins'
    },
    topSelect:{
        fontFamily:'Poppins',
        fontSize:'11@s',
    },
    cancelView:{
        backgroundColor:'#D2DBF1',
        height:'40@s',
        alignItems:'center',
        justifyContent:'center'
    },
    cancel:{
        fontFamily:'Poppins',
        fontSize:'11@s'
    }
})