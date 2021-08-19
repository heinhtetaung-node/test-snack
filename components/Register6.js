import * as React from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper'
import HeaderFlag from '../style/HeaderFlag'
import RNPickerSelect from 'react-native-picker-select'
import { ScaledSheet, scale } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'

const numberList = [
    { label: '097114526', value:'097114526' },
    { label: '096314788', value:'096314788' },
    { label: '093322447', value:'093322447' },
    { label: '034455218', value:'034455218' },
]

const place = {
    label: 'Select number',
    value: null,
    color: '#595959',
}

export default function Register6({navigation}) {

    const [checked, setChecked] = React.useState('')
    const [values, setValues] = React.useState('')
    const [click, setClick] = React.useState('')

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
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                            </View>
                        </View>
                        
                        {/* First radio buttom and text */}
                        <Text style={styles.fistText}>Please select your final acedamic background</Text>
                        <View style={styles.radioButtom1}>   
                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="one"
                                    status={ checked === 'one' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('one')}
                                />
                                <Text style={styles.radioText}>Graduat school</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="two"
                                    status={ checked === 'two' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('two')}
                                />
                                <Text style={styles.radioText}>University</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="three"
                                    status={ checked === 'three' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('three')}
                                />
                                <Text style={styles.radioText}>Junior college</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="four"
                                    status={ checked === 'four' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('four')}
                                />
                                <Text style={styles.radioText}>Specialization / miscellaneous shcool</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="five"
                                    status={ checked === 'five' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('five')}
                                />
                                <Text style={styles.radioText}>College of technolgy</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="six"
                                    status={ checked === 'six' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('six')}
                                />
                                <Text style={styles.radioText}>High school</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="seven"
                                    status={ checked === 'seven' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('seven')}
                                />
                                <Text style={styles.radioText}>Others</Text>
                            </View>
                        </View>

                        {/* Second radio buttom and text */}
                        <Text style={styles.secondText}>Please select a graduation categroy</Text>
                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="one"
                                    status={ values === 'one' ? 'checked' : 'unchecked' }
                                    onPress={() => setValues('one')}
                                />
                                <Text style={styles.radioText}>Graduate</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="two"
                                    status={ values === 'two' ? 'checked' : 'unchecked' }
                                    onPress={() => setValues('two')}
                                />
                                <Text style={styles.radioText}>Expected graduate</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="three"
                                    status={ values === 'three' ? 'checked' : 'unchecked' }
                                    onPress={() => setValues('three')}
                                />
                                <Text style={styles.radioText}>Dropped out</Text>
                            </View>

                        {/* Third radio buttom and text */}
                        <Text style={styles.thirdText}>Please select your current work status</Text>
                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="one"
                                    status={ click === 'one' ? 'checked' : 'unchecked' }
                                    onPress={() => setClick('one')}
                                />
                                <Text style={styles.radioText}>Currently working</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="two"
                                    status={ click === 'two' ? 'checked' : 'unchecked' }
                                    onPress={() => setClick('two')}
                                />
                                <Text style={styles.radioText}>Not working</Text>
                            </View>

                        <Text style={styles.lastText}>Please select the number of job changes</Text>
                            <View style={styles.selectTop}>
                                <RNPickerSelect
                                    useNativeAndroidPickerStyle={false}
                                    style={{
                                        inputIOS: {
                                            fontSize:scale(11),
                                            color:'#333333',
                                            paddingTop:scale(10),
                                            fontFamily:'Poppins',
                                            paddingHorizontal:scale(9)
                                        }
                                    }}
                                    style={{
                                        inputAndroid:{
                                            fontSize:scale(11),
                                            color:'#333333',
                                            paddingTop:scale(8),
                                            fontFamily:'Poppins',
                                            paddingHorizontal:scale(9)
                                        }
                                    }}
                                    onValueChange={(value) => console.log(JSON.stringify(value))}
                                    placeholder={place}
                                    items={numberList}
                                /> 
                            </View>
                        </View>
                </View>
                <View style={styles.footerButtom}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonPrevious}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('Register7')}>
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
        marginHorizontal:'14@s',
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
    fistText:{
        marginTop:'30@s',
        marginBottom:'14@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    radioContainer:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#595959',
        borderRadius:4,
        height:'37@s',
        alignItems:'center',
        marginBottom:'8@s',
    },
    radioText:{
        color:'#595959',
        fontSize:'11@s',
        fontFamily:'Poppins'
    },
    secondText:{
        marginTop:'34@s',
        marginBottom:'14@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    thirdText:{
        marginTop:'34@s',
        marginBottom:'14@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    lastText:{
        marginTop:'34@s',
        marginBottom:'14@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    selectTop:{
        borderWidth:1,
        height:'35@s',
        fontSize: '11@s',
        borderColor: 'gray',
        borderRadius: 4,
        marginBottom:'20@s'
    },
    footerButtom:{
        width:'100%',
        marginTop:25,
        marginBottom:20
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