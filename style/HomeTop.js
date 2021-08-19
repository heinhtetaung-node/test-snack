import { StyleSheet, Dimensions } from 'react-native'
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
    veryFirstTop:{
        backgroundColor:'#F5F5F5',
        flex:1,
        width: '100%',
        height: height,
        position: 'relative',
        marginTop:30,
    }
})

export default styles