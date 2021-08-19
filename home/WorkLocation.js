import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import WorkLocHeader from '../style/WorkLocHeader'
import { scale, ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import { AntDesign } from '@expo/vector-icons'
import { Checkbox } from 'react-native-paper'

export default function WorkLocation() {

    const [checked, setChecked] = React.useState(false)

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
    <ScrollView contentContainerStyle={{ 
            flexGrow: 1, 
            flexDirection: 'column', 
            justifyContent: 'space-between'
        }}>

        <View style={styles.container}>
            <WorkLocHeader />

            <View style={styles.bar}>
                <Text style={styles.barText}>Donghai</Text>
                <AntDesign name="down" size={scale(16)} color="#3F62A8" />
            </View>
            <View style={styles.bar}>
                <Text style={styles.barText}>Hokushiyue</Text>
                <AntDesign name="up" size={scale(16)} color="#3F62A8" />
            </View>

            {/* Triple Check Start */}
            <View style={styles.bar}>
                <View style={styles.checkAndText}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}

                        style={{paddingTop:scale(5)}}
                    />
                    <Text>Place 1</Text>
                </View>
                <AntDesign name="up" size={scale(16)} color="#3F62A8" />
            </View>

                {/* double */}
                <View style={styles.doubleSelect}>
                    <View style={styles.checkAndText}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}

                            style={{paddingTop:scale(5)}}
                        />
                        <Text>A</Text>
                    </View>
                </View>

                <View style={styles.doubleSelect}>
                    <View style={styles.checkAndText}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}

                            style={{paddingTop:scale(5)}}
                        />
                        <Text>A</Text>
                    </View>
                    <AntDesign name="up" size={scale(16)} color="#3F62A8" />
                </View>
                {/* double */}

                    {/* triple */}
                    <View style={styles.tripleSelect}>
                        <View style={styles.checkAndText}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}

                                style={{paddingTop:scale(5)}}
                            />
                            <Text>aa</Text>
                        </View>
                    </View>

                    <View style={styles.tripleSelect}>
                        <View style={styles.checkAndText}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}

                                style={{paddingTop:scale(5)}}
                            />
                            <Text>aa</Text>
                        </View>
                    </View>
                    {/* triple */}

                {/* double */}
                <View style={styles.doubleSelect}>
                    <View style={styles.checkAndText}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}

                            style={{paddingTop:scale(5)}}
                        />
                        <Text>B</Text>
                    </View>
                </View>
                <View style={styles.doubleSelect}>
                    <View style={styles.checkAndText}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}

                            style={{paddingTop:scale(5)}}
                        />
                        <Text>C</Text>
                    </View>
                </View>
                {/* double */}

            {/* Triple Check End */}

            <View style={styles.bar}>
                <View style={styles.checkAndText}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}

                        style={{paddingTop:scale(5)}}
                    />
                    <Text>Place 2</Text>
                </View>
            </View>

            <View style={styles.bar}>
                <Text style={styles.barText}>Jiuzhou</Text>
                <AntDesign name="down" size={scale(16)} color="#3F62A8" />
            </View>

            <View style={styles.bar}>
                <Text style={styles.barText}>Guan Xi</Text>
                <AntDesign name="down" size={scale(16)} color="#3F62A8" />
            </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Select</Text>
            </View>
        </View>
    </ScrollView>
    )
}

const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#F5F5F5',
        flex:1
    },
    bar:{
        height:'48@s',
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'15@s',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#F5F5F5',
    },
    barText:{
        color:'#595959',
        fontSize:'12@s'
    },
    checkAndText:{
        flexDirection:'row',
        alignItems:'center'
    },
    doubleSelect:{
        width:'95%',
        height:'48@s',
        backgroundColor:'#fff',
        alignSelf:'flex-end',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:'15@s',
    },
    tripleSelect:{
        width:'90%',
        height:'48@s',
        backgroundColor:'#fff',
        alignSelf:'flex-end',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:'15@s',
    },
    footer:{
        marginBottom:20
    },
    button:{
        borderRadius:4,
        paddingVertical:'11@s',
        paddingHorizontal:10,
        backgroundColor:'#003978',
        marginHorizontal:'14@s',
    },
    buttonText:{
        color:'#fff',
        fontWeight:'500',
        fontSize:'12@s',
        textAlign:'center',
        fontFamily:'Poppins'
    },
})