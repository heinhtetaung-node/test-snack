import React, { useState } from 'react'
import { Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Image, SafeAreaView, SectionList } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import { Checkbox } from 'react-native-paper'
import SearchHeader from '../style/SearchHeader'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import TopApp from '../style/HomeTop'

export default function Search() {

    const [checked, setChecked] = React.useState(false)

    const list = [
        { title:'Inexperienced occupation welcome', id: '1' },
        { title:'Industry inexperienced welcome', id: '2' },
        { title:'No transfer (limited to work location)', id: '3' },
        { title:'Welcome to the second new graduate', id: '4' },
        { title:'More than 10 years of working experience welcomed', id: '5' },
        { title:'Urgent recruitment! 1 month to join the company', id: '6' },
        { title:'5 or more hires', id: '7' },
        { title:'No change in occupation after joining the company', id: '8' }
    ]

    const list2 = [
        { title:'companies', id: '1' },
        { title:'Foreign-affiliated company', id: '2' },
        { title:'Retention rate 95% or more', id: '3' },
        { title:"Women's success", id: '4' },
        { title:'Car commuting OK', id: '5' },
        { title:'Free clothing', id: '6' }
    ]

    const list3 = [
        { title:'Pay system', id: '1' },
        { title:'Company housing / rent subsidy system', id: '2' },
        { title:'Childcare / childcare support system', id: '3' },
        { title:'Qualification acquisition support system', id: '4' },
        { title:'Enhanced training system', id: '5' },
        { title:'Fixed salary of 250,000 yen or more', id: '6' },
        { title:'Fixed salary of 350,000 yen or more', id: '7' },
        { title:'With U / I turn support', id: '8' }
    ]

    const list4 = [
        { title:'Make use of English', id: '1' },
        { title:'Make the most of Chinese', id: '2' },
    ]

    const list5 = [
        { title:'There is an overseas business trip', id: '1' },
        { title:'Manager / Manager', id: '2' },
    ]

    const list6 = [
        { title:'20s', id: '1' },
        { title:'30s', id: '2' },
        { title:'40s', id: '3' },
        { title:'over 50s', id: '4' },
    ]

    const list7 = [
        { title:'~ 10 people', id: '1' },
        { title:'11-100 people', id: '2' },
        { title:'101-1000 people', id: '3' },
        { title:'1001 people ~', id: '4' },
    ]

    const list8 = [
        { title:'~ 1 year', id: '1' },
        { title:'2 - 10 years', id: '2' },
        { title:'11 - 50 years', id: '3' },
        { title:'51 years ~ ', id: '4' },
    ]

    const list9 = [
        { title:'Only jobs that apply directly to the company', id: '1' },
        { title:'Agent Service Jobs Only', id: '2' },
    ]

    const top = () => {
        return (
            <View>
                <View style={styles.topSearch}>
                    <TextInput placeholder={'Search by keywords'} style={styles.input} />
                    <Image style={styles.img} source={require('../image/close.png')} />
                </View>

                <View style={styles.bodyList}>
                    <View style={styles.one}>
                        <EvilIcons name="location" size={scale(18)} color="#3F62A8" />
                        <Text style={styles.oneText}>Form of employment</Text>
                    </View>
                    <View style={styles.one}>
                        <View style={styles.numberRound}>
                            <Text style={styles.number}>3</Text>
                        </View>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View> 
                </View>
                <View style={styles.bodyList}>
                    <View style={styles.one}>
                        <FontAwesome name="briefcase" size={scale(18)} color="#3F62A8" />
                        <Text style={styles.oneText}>Position</Text>
                    </View>
                    <View style={styles.one}>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View> 
                </View>
                <View style={styles.bodyList}>
                    <View style={styles.one}>
                        <AntDesign name="file1" size={scale(18)} color="#3F62A8" />
                        <Text style={styles.oneText}>Form of employment</Text>
                    </View>
                    <View style={styles.one}>
                        <View style={styles.numberRound}>
                            <Text style={styles.number}>3</Text>
                        </View>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View> 
                </View>
                <View style={styles.bodyList}>
                    <View style={styles.one}>
                        <Feather name="shield" size={scale(18)} color="#3F62A8" />
                        <Text style={styles.oneText}>Insurance</Text>
                    </View>
                    <View style={styles.one}>
                        <View style={styles.numberRound}>
                            <Text style={styles.number}>2</Text>
                        </View>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View> 
                </View>
                <View style={styles.bodyList}>
                    <View style={styles.one}>
                        <FontAwesome name="yen" size={scale(18)} color="#3F62A8" />
                        <Text style={styles.oneText}>Annual income</Text>
                    </View>
                    <View style={styles.one}>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View> 
                </View>
                <View style={styles.bodyList}>
                    <View style={styles.one}>
                        <FontAwesome name="moon-o" size={scale(18)} color="#3F62A8" />
                        <Text style={styles.oneText}>Holidays</Text>
                    </View>
                    <View style={styles.one}>
                        <View style={styles.numberRound}>
                            <Text style={styles.number}>4</Text>
                        </View>
                        <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                    </View> 
                </View>
            </View>
        )
    }

    const footer = () => {
        return (
            <View style={styles.checkBodyListEnd}></View>
        )
    }

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (                
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={TopApp.veryFirstTop}>
                <View style={styles.container}>
                    <SearchHeader />
                    <SafeAreaView style={{flex:1}}>

                        <SectionList 
                            sections={[
                                {title: 'Recruitment information', data: list },
                                {title: 'Company / work environment', data: list2},
                                {title: 'Treatment', data: list3},
                                {title: 'Language', data: list4},
                                {title: 'Job description', data: list5},
                                {title: 'Average age of employees', data: list6},
                                {title: 'Number of employees', data: list7},
                                {title: 'Established', data: list8},
                                {title: 'How to apply', data: list9}
                            ]}
                            ListHeaderComponent={top}
                            renderItem={({ item }) => (
                                <View style={styles.checkList}>
                                    <Checkbox
                                        status={checked ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(!checked);
                                        }}

                                        style={{paddingTop:scale(5)}}
                                    />
                                    <Text style={styles.checkText}>{item.title}</Text>
                                </View>
                            )}
                            renderSectionHeader={({ section }) => (
                                <View style={styles.checkBodyList}>
                                    <Text style={styles.checkBoxText}>{section.title}</Text>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                            ListFooterComponent={footer}
                        />
                    </SafeAreaView>
                    <View style={{backgroundColor:'transparent', width: '100%', height: scale(54), position:'absolute', bottom:0, left:0, zIndex:999}}>
                        <View style={styles.button}>
                            <View style={styles.containerButton}>
                                <View style={styles.buttonPrevious}>
                                    <FontAwesome name="bookmark-o" size={scale(18)} color="#F27E34" />
                                    <Text style={styles.textJob}>Save condition</Text>
                                </View>
                            </View>
                            <View style={styles.containerButton}>
                                <View style={styles.applyButton}>
                                    <Text style={styles.applyJob}>Search</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )    
}


const styles = ScaledSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5',
    },
    topSearch:{
        padding:'15@s',
    },
    input:{
        borderWidth: 1,
        height:'47@s',
        borderColor:'#fff',
        borderRadius:4,
        marginBottom:'6@s',
        paddingLeft:'13@s',
        fontFamily:'Poppins',
        fontSize:'11@s',
        backgroundColor:'#fff'
    },
    img:{
        position:'absolute',
        width:'17@s',
        height:'17@s',
        right:'20@s',
        top:'28@s',
    },
    body:{
        marginBottom:'8@s'
    },
    imgSize:{
        width:'12@s',
        height:'12@s',
        resizeMode:'stretch'
    },
    imgRight:{
        width:'9@s',
        height:'9@s',
        resizeMode:'stretch'
    },
    bodyList:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:'46@s',
        backgroundColor:'#fff',
        borderBottomColor:'#F5F5F5',
        borderBottomWidth:1
    },
    one:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'13@s'
    },
    oneText:{
        paddingLeft:'14@s',
        fontSize:'11@s',
        fontFamily:'Poppins'
    },
    numberRound:{
        borderWidth:1,
        borderColor:'#F27E34',
        width:'14@s',
        height:'14@s',
        borderRadius:'25@s',
        marginRight:'14@s'
    },
    number:{
        borderRadius:'25@s',
        color:'#F27E34',
        textAlign:'center',
        fontSize:'8@s',
        fontFamily:'Poppins'
    },
    checkBodyList:{
        backgroundColor:'#fff',
        justifyContent:'center',
        height:'29@s',
        marginTop:'8@s'
    },
    checkBodyListEnd:{
        backgroundColor:'#fff',
        marginBottom:'50@s'
    },
    checkBoxText:{
        fontFamily:'Poppins',
        fontSize:'11@s',
        paddingHorizontal:'14@s'
    },
    checkList:{
        height:'46@s',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'14@s',
        borderBottomColor:'#F5F5F5',
        borderBottomWidth:1,
        backgroundColor:'#fff',
    },
    checkText:{
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        paddingVertical:'10@s'
    },
    containerButton:{
        width:'49%'
    },
    buttonPrevious:{
        fontWeight:'500',
        textAlign:'center',
        borderRadius:4,
        borderWidth:2,
        borderColor:'#F27E34',
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:'6@s',
        backgroundColor:'#fff'
    },
    textJob:{
        color:'#F27E34',
        paddingLeft:'7@s',
        fontFamily:'Poppins',
        fontSize:'12@s',
    },
    applyButton:{
        textAlign:'center',
        backgroundColor:'#003978',
        borderRadius:4,
        paddingVertical:'7@s',
    },
    applyJob:{
        color:'#fff',
        fontSize:'12@s',
        textAlign:'center',
        fontFamily:'Poppins',
    }
})