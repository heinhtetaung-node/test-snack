import React from 'react'
import Logo from '../../image/JIJ-02.png'
import Bell from '../../image/bell.png'
import { ScaledSheet } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity} from 'react-native'

export default function HeaderBar() {

    const navigation = useNavigation()

    return (
    <View style={[styles.top, {position: 'relative', zIndex: 2}]}>
        <Image style={styles.leftLogo} source={Logo} />

        <View style={styles.right}>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Image style={styles.rightLogo} source={Bell}/>
                <View style={styles.righNumPosition}>
                    <Text style={styles.rightNumber}>5</Text>
                </View>  
            </TouchableOpacity>
        </View>  
    </View>
    )
}

const styles = ScaledSheet.create({
    top:{
        width: '100%',
        height:'40@s',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'13@s',
        backgroundColor:'#fff',
        alignItems:'center'
    },
    leftLogo:{
        width:'125@s',
        height:'36@s',
    },
    rightLogo:{
        width:'20@s',
        height:'20@s',
    },
    righNumPosition:{
        position:'absolute',
        left:'10@s',
        bottom:'10@s',
    },
    rightNumber:{
        backgroundColor:'#F27E34',
        width:'12@s',
        height:'12@s',
        borderRadius:'25@s',
        color:'#fff',
        textAlign:'center',
        fontSize:'8@s',
    }
})
