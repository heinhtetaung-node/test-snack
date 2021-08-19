import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../image/JIJ-02.png'

export default function LoadingPage() {
        return (
            <View style={styles.main}>
                <View style={styles.container}>
                    <View style={styles.Logo} >

                        <Image style={styles.BottomLogo} source={Logo} />
                    </View> 
                </View>
            </View>   
        )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomLogo:{
        width: 150,
        height: 46
    }
})
