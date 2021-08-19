import * as React from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper'
import HeaderFlag from '../style/HeaderFlag'
import RNPickerSelect from 'react-native-picker-select'
import { ScaledSheet, scale } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'

// Language picker select list
const placeList = [
    { label: 'PHP', value:'PHP' },
    { label: 'Laravel', value:'Laravel' },
    { label: 'Javascript', value:'Javascript' },
    { label: 'React Native', value:'React Native' },
    { label: 'React JS', value:'React JS' },
]

const place = {
    label: 'Major choice',
    value: null,
    color: '#bbb',
}

export default function Register10({navigation}) {

    const [checked, setChecked] = React.useState('')

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
                                <View style={styles.line1}></View>
                                <View style={styles.line1}></View>
                            </View>
                        </View>

                        <Text style={styles.textOne}>Please select the employee type</Text>

                        {/* Radio Buttom List start */}
                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="1"
                                    status={ checked === '1' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('1')}
                                />
                                <Text style={styles.radioText}>Full-time employee</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="2"
                                    status={ checked === '2' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('2')}
                                />
                                <Text style={styles.radioText}>Contract employee</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="3"
                                    status={ checked === '3' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('3')}
                                />
                                <Text style={styles.radioText}>Dispatched employee</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="4"
                                    status={ checked === '4' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('4')}
                                />
                                <Text style={styles.radioText}>Introduction</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="5"
                                    status={ checked === '5' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('5')}
                                />
                                <Text style={styles.radioText}>Subcontracting</Text>
                            </View>

                            <View style={styles.radioContainer}>
                                <RadioButton
                                    value="6"
                                    status={ checked === '6' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('6')}
                                />
                                <Text style={styles.radioText}>Others (including FC owners and part-time workers)</Text>
                            </View>

                        {/* Radio Buttom List ended */}

                        <Text style={styles.textTwo}>Employment form</Text>

                        {([1,2].map((item)=>{
                            return(
                                <View style={styles.selectTop} key={item}>
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
                                                paddingTop:scale(12),
                                                fontFamily:'Poppins',
                                                paddingHorizontal:scale(9)
                                            }
                                        }}
                                        onValueChange={(value) => console.log(JSON.stringify(value))}
                                        placeholder={place}
                                        items={placeList}
                                    /> 
                                </View>
                            )
                        }))}
                    </View>
                </View> 

                <View style={styles.footerButtom}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonPrevious}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('Register11')}>
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
    textTwo:{
        fontSize:'11@s',
        marginTop:'34@s',
        marginBottom:'15@s'
    },
    selectTop:{
        borderWidth:1,
        height:'46@s',
        fontSize: '11@s',
        borderColor: 'gray',
        borderRadius: 4,
        marginBottom:'7@s'
    },
    footerButtom:{
        width:'100%',
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