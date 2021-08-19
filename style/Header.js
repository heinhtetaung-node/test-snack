import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Logo from '../image/JIJ-02.png'
import Group from '../image/Group.png'

export default function Header() {
    return (
        <View style={styles.top}>
            <View style={styles.BottomLogoAndText}>
                <Image style={styles.BottomLogo} source={Logo} />
                <View style={styles.flagAndText}>
                    <Image style={styles.flagImg} source={Group} />
                    <Text style={styles.BottomText}>Sign Up</Text>
                </View>  
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    top:{
        backgroundColor:'#fff',
        marginTop:30,
    },
    BottomLogoAndText:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:56,
        marginHorizontal:16
    },
    BottomLogo:{
        width: 150,
        height: 42,
        marginVertical:7,
    },
    flagAndText:{
        flexDirection:'row',
        marginVertical:17
    },
    flagImg:{
        width:28,
        height:28,
        borderRadius:30,
        marginRight:24
    },
    BottomText:{
        paddingTop:3,
        fontSize:14,
        color:'#595959'
    }
})