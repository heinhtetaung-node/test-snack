import * as React from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import LanguageHeader from '../style/LanguageHeader'
import { RadioButton } from 'react-native-paper'
import TopApp from '../style/HomeTop'

export default function Language() {

    const [checked, setChecked] = React.useState('one')

    return (
        <View style={TopApp.veryFirstTop}>
            <View style={styles.top}>
                <LanguageHeader />
                <View>
                    <View style={styles.radioContainer}>
                        <Text style={styles.radioText}>English</Text>
                        <RadioButton
                            value="one"
                            status={ checked === 'one' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('one')}
                        />
                    </View>
                    <View style={styles.radioContainer}>
                        <Text style={styles.radioText}>Japan</Text>
                        <RadioButton
                            value="two"
                            status={ checked === 'two' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('two')}
                        />
                    </View>
                    <View style={styles.radioContainer}>
                        <Text style={styles.radioText}>Myanmar</Text>
                        <RadioButton
                            value="three"
                            status={ checked === 'three' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('three')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    top:{
        backgroundColor:'#F5F5F5',
        flex:1
    },
    radioContainer:{
        flexDirection:'row',
        borderBottomWidth:3,
        borderColor:'#F5F5F5',
        backgroundColor:'#fff',
        height:'37@s',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:'14@s'
    },
    radioText:{
        color:'#595959',
        fontSize:'11@s',
        fontFamily:'Poppins'
    },
})