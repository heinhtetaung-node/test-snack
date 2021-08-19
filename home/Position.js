import React from 'react'
import { View, Text } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'
import PositionHeader from '../style/PositionHeader'
import { AntDesign } from '@expo/vector-icons'

export default function Position() {
    return (
        <View style={styles.container}>
            <PositionHeader />
            
            <View style={styles.bar}>
                <Text style={styles.textOne}>Work location</Text>

                <View style={styles.innerBar}>
                    <Text style={styles.textTwo}>2</Text>
                    <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                </View>
            </View>
            <View style={styles.bar}>
                <Text style={styles.textOne}>Line station</Text>

                <View style={styles.innerBar}>
                    <Text style={styles.textTwo}>1</Text>
                    <AntDesign name="right" size={scale(16)} color="#3F62A8" />
                </View>
            </View>
        </View>
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
    innerBar:{
        flexDirection:'row',
        alignItems:'center'
    },
    textOne:{
        color:'#595959',
        fontSize:'11@s'
    },
    textTwo:{
        color:'#595959',
        fontSize:'11@s',
        paddingRight:'14@s'
    }
})