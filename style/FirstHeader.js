import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'
import { RadioButton } from 'react-native-paper'

export default function FirstHeader() {

    const navigation = useNavigation() 

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
        <View style={styles.headerTop}>

            <TouchableOpacity onPress={toggleModal}>
                <Image style={styles.flagImg} source={require('../image/Group.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>

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
        </View>
    )
}

const styles = ScaledSheet.create({
    headerTop:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'14@s',
        height:'44@s',
        alignItems:'center'
    },
    flagImg:{
        width:'25@s',
        height:'25@s',
        borderRadius:'30@s',
    },
    skip:{
        color:'#3F62A8',
        fontFamily:'Poppins',
        fontSize:'12@s'
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
    viewTop:{
        height:'48@s',
        backgroundColor:'#fff',
        justifyContent:'center',
        paddingLeft:'13@s'
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