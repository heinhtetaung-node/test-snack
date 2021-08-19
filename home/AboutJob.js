import React from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import AboutJobHeader from '../style/AboutJobHeader'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import RNPickerSelect from 'react-native-picker-select'
import TopApp from '../style/HomeTop'

// Industry Type picker select list
const industry = [
    { label: 'aa', value: 'aa' },
    { label: 'bb', value: 'bb' },
    { label: 'cc', value: 'cc' }
];

const industryPlace = {
    label: 'Industry',
    value: null,
    color: '#9EA0A4',
}

// Occupation Type picker select list
const occupation = [
    { label: 'Customer Service', value: 'Customer Service' },
    { label: 'Digital marketing', value: 'Digital marketing' },
    { label: 'Account', value: 'Account' }
];

const occupationPlace = {
    label: 'Occupation',
    value: null,
    color: '#9EA0A4',
}


// Preferred work Type picker select list
const preferred = [
    { label: 'Customer Service', value: 'Customer Service' },
    { label: 'Digital marketing', value: 'Digital marketing' },
    { label: 'Account', value: 'Account' }
];

const preferredPlace = {
    label: 'Preferred work location',
    value: null,
    color: '#9EA0A4',
}

// Employment status picker select list
const status = [
    { label: 'full-time', value: 'full-time' },
    { label: 'part-time', value: 'part-time' },
    { label: 'so', value: 'so' }
];

const statusPlace = {
    label: 'Employment status',
    value: null,
    color: '#9EA0A4',
}

export default function AboutJob() {

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <View style={TopApp.veryFirstTop}>
            <View style={styles.top}>
                <View style={styles.container}>
                    <AboutJobHeader />
                    <View style={styles.body}>
                        <Text style={styles.bodyText}>About job</Text>
                        {/* Industry Type started ==================================== */}
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
                                placeholder={industryPlace}
                                items={industry}
                            /> 
                        </View> 
                        {/* Industry Type ended ==================================== */}

                        {/* Occupation Type started ==================================== */}
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
                                placeholder={occupationPlace}
                                items={occupation}
                            /> 
                        </View> 
                        {/* Occupation Type ended ==================================== */}

                        {/* Preferred Work Type started ==================================== */}
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
                                placeholder={preferredPlace}
                                items={preferred}
                            /> 
                        </View> 
                        {/* Preferred Work Type ended ==================================== */}

                        {/* Preferred Work Type started ==================================== */}
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
                                placeholder={statusPlace}
                                items={status}
                            /> 
                        </View> 
                        {/* Preferred Work Type ended ==================================== */}
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
            </View>
        </View>
    )
}


const styles = ScaledSheet.create({
    top:{
        flex:1,
        backgroundColor:'#F5F5F5'
    },
    container:{
        flex:1
    },
    body:{
        padding:'14@s',
        backgroundColor:'#fff'
    },
    bodyText:{
        fontSize:'12@s',
        fontFamily:'Poppins',
        paddingBottom:'14@s'
    },
    selectTop:{
        borderWidth:1,
        height:'35@s',
        fontSize: '11@s',
        borderColor: 'gray',
        borderRadius: 4,
        marginBottom:'8@s'
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

