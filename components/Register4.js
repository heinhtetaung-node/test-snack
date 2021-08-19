import React from 'react'
import { View, Text, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native'
import HeaderFlag from '../style/HeaderFlag'
import RNPickerSelect from 'react-native-picker-select'
import { ScaledSheet, scale } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'


// Language picker select list
const placeList = [
    { label: 'Japan', value:'Japan' },
    { label: 'China', value:'China' },
    { label: 'Myanmar', value:'Myanmar' },
    { label: 'Thai', value:'Thai' },
    { label: 'Russia', value:'Russia' },
]

const place = {
    label: 'Place 1',
    value: null,
    color: '#9EA0A4',
}

export default function Register4({navigation}) {

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
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                                <View style={styles.line}></View>
                            </View>
                        </View>

                        <Text style={styles.textSelect}>Please select prefer work area / place</Text>

                        {([1,2,3,4,5,6,7,8].map((item)=>{
                            return(
                                <View style={ (item === [1,2,3,4,5,6,7,8,9].length - 1) ? styles.noSelectTop : styles.selectTop} key={item}>
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
                        <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('Register5')}>
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
    textSelect:{
        marginTop:'30@s',
        marginBottom:'14@s',
        fontSize:'11@s',
        fontFamily:'PoppinsMedium'
    },
    selectTop:{
        borderBottomWidth:1,
        height:'45@s',
        fontSize: '11@s',
        borderColor: '#E9E9E9',
        borderRadius: 4,
        backgroundColor:'#FAFAFA',
    },
    noSelectTop:{
        borderBottomWidth:0,
        backgroundColor:'#FAFAFA',
        height:'45@s',
    },
    footerButtom:{
        width:'100%',
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