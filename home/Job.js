import React from 'react'
import {  View, Text, ScrollView } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'

export default function Job() {

    const[loaded] = useFonts({Poppins, PoppinsMedium})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <ScrollView>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.textHeader}>Job Description</Text>
                    <Text style={styles.textOne}>Operation of "Otakaraya", which boasts the industry's top class number of stores (1000 stores nationwide * including waiting for store openings) ◎ Stores are expanding ★ Many media (TV commercials, magazines, etc.) are published! 22 consecutive terms growing! ★ Compatible with a wide range of items such as gold / precious metals, diamonds / jewels, and brand watches</Text>
                </View>

                <View style={styles.containerTwo}>
                    <Text style={styles.textHeader}>Work location</Text>
                    <Text style={styles.textTwo}>Headquarters relocated in May, Minatomirai "Queen's Tower"</Text>

                    <Text style={styles.textTwo}>★ Recruitment is being strengthened in one of the three prefectures!</Text>

                    <Text style={styles.textTwo}>★ The place of work of the purchaser will be decided after considering the current address and wishes.</Text>

                    <Text style={styles.textTwo}>★ Please check the website for details on where you work.</Text>

                    <Text style={styles.textTwo}>https://www.otakaraya.jp/kikinzoku/shop/</Text>
                </View>

                <View style={styles.containerTwo}>
                    <Text style={styles.textHeader}>Working hours</Text>
                    <Text style={styles.textTwo}>9:00 to 18:00 (actual work 7 hours 15 minutes / break 105 minutes)</Text>

                    <Text style={styles.textTwo}>or</Text>

                    <Text style={styles.textTwo}>10:00 to 19:00 (actual work 7 hours 15 minutes / break 105 minutes)</Text>    

                    <Text style={styles.textTwo}>* Depends on assignment.</Text>
                </View>

                <View style={styles.containerTwo}>
                    <Text style={styles.textHeader}>Employment status</Text>
                    <Text style={styles.textOne}>Full-time employee</Text>
                    <Text style={styles.textOne}>* There is no trial period</Text>
                </View>

                <View style={styles.containerTwo}>
                    <Text style={styles.textHeader}>Treatment / wellfare</Text>
                    <Text style={styles.textOne}>Various systems</Text>
                    <Text style={styles.textOne}>■ Salary increase / promotion (as needed according to results)</Text>        
                    <Text style={styles.textOne}>■ High incentive (preparation of daily / monthly calculation table)</Text>       
                    <Text style={styles.textOne}>■ Position allowance</Text>        
                    <Text style={styles.textOne}>■ Award system</Text>        
                    <Text style={styles.textOne}>■ Full transportation expenses</Text>        
                    <Text style={styles.textOne}>■ Social insurance complete (employment / industrial accident / health / welfare pension)</Text>        
                    <Text style={styles.textOne}>■ Company housing system</Text>       
                    <Text style={styles.textOne}>■ Employee discount</Text>        
                    <Text style={styles.textOne}>■ Training system (joining training, etc.)</Text>        
                    <Text style={styles.textOne}>■ Health examination</Text>        
                    <Text style={styles.textOne}>■ Free drink server available</Text>        
                    <Text style={styles.textOne}>■ Free golf simulator available</Text>        
                    <Text style={styles.textTwo}>■ In-house recreation</Text>        

                    <Text style={styles.textOne}>Other</Text>
                    <Text style={styles.textOne}>■ Paid leave (acquisition rate 100%)</Text>
                    <Text style={styles.textOne}>■ Summer vacation (3 days)</Text>
                    <Text style={styles.textOne}>■ Year-end and New Year leave (4 days)</Text>
                    <Text style={styles.textOne}>■ Condolence leave</Text>
                    <Text style={styles.textOne}>■ Prenatal and postnatal leave (with track record)</Text>
                    <Text style={styles.textOne}>■ Childcare leave (with track record)</Text>
                    <Text style={styles.textOne}>■ Nursing leave</Text>
                    <Text style={styles.textOne}>■ Nursing leave</Text>
                </View>
            </View>
        </ScrollView>      
    )
}

const styles = ScaledSheet.create({
    main:{
        marginBottom:'60@s'
    },
    container:{
        backgroundColor:'#fff',
        padding:'12@s'
    },
    textHeader:{
        fontFamily:'PoppinsMedium',
        fontSize:'12@s',
        paddingBottom:'6@s'
    },
    textOne:{
        fontFamily:'Poppins',
        fontSize:'11@s'
    },
    containerTwo:{
        backgroundColor:'#fff',
        marginTop:'5@s',
        padding:'12@s'
    },
    textTwo:{
        fontFamily:'Poppins',
        fontSize:'11@s',
        paddingBottom:'8@s'
    }
})