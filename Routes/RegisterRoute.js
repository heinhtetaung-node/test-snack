import React from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Onboarding1 from '../components/Onboarding1'
import Onboarding2 from '../components/Onboarding2'
import Onboarding3 from '../components/Onboarding3'
import LogIn from '../components/LogIn'
import Register from '../components/Register'
import Register2 from '../components/Register2'
import Register3 from '../components/Register3'
import Register4 from '../components/Register4'
import Register5 from '../components/Register5'
import Register6 from '../components/Register6'
import Register7 from '../components/Register7'
import Register8 from '../components/Register8'
import Register9 from '../components/Register9'
import Register10 from '../components/Register10'
import Register11 from '../components/Register11'
import ForgetPassWorld from '../components/ForgetPassWorld'
import ForgetPassWorld2 from '../components/ForgetPassWorld2'
import ForgetPassWorld3 from '../components/ForgetPassWorld3'
import Homes from '../home/Homes'
import Search from '../home/Search'
import SavedJob from '../home/SavedJob'
import Mails from '../home/Mails'
import JobDetail from '../home/JobDetail'
import Menu from '../home/Menu'
import Notifications from '../home/Notifications'
import Language from '../home/Language'
import Profile from '../home/Profile'
import Contact from '../home/Contact'
import Education from '../home/Education'
import AboutJob from '../home/AboutJob'
import Experience from '../home/Experience'
import LangugeSkill from '../home/LangugeSkill'
import OtherSkill from '../home/OtherSkill'
import Qualification from '../home/Qualification'
import PR from '../home/PR'
import ProfilePicAndRe from '../home/ProfilePicAndRe'
import { ScaledSheet, scale } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import Poppins from '../assets/fonts/Poppins-Light.ttf'
import { Feather } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const TabScreen = () => (
    <Tabs.Navigator
        // screenOptions={({route}) => ({
        //     tabBarIcon: ({ size, color }) => {
        //         let iconName
        //         if (route.name === 'Home') {
        //             iconName = 'home'
        //             size = scale(16)
        //         }else if (route.name === 'Search') {
        //             iconName = 'search'
        //             size = scale(16)
        //         }else if (route.name === 'Saved') {
        //             iconName = 'bookmark'
        //             size = scale(16)
        //         }else if (route.name === 'Menu') {
        //             iconName = 'bars'
        //             size = scale(16)
        //         }

        //         return(
        //             <FontAwesome5 
        //                 name={iconName}
        //                 size={size}
        //                 color={color}
        //             />
        //         )
        //     }
        // })}
        tabBarOptions={{
            activeTintColor:'#3F62A8',
            inactiveTintColor:'#848484',
            style:{
                backgroundColor:'#fff',
                height:scale(45),
            },
            labelStyle:{
                fontSize:scale(9),
                fontFamily:'Poppins'
            },
            tabStyle:{
                marginTop:scale(10),
                flexDirection: 'column',
                height:scale(28)
            },
        }}
    >
        <Tabs.Screen name="Home"  component={Homes}
            options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Feather name="home" size={scale(18)} style={{color:focused ? '#3F62A8' : '#848484'}} />
                    </View>
                )
            }}
        />
        <Tabs.Screen name="Search"  component={Search} 
            options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Feather name="search" size={scale(18)} color="gray" style={{color:focused ? '#3F62A8' : '#848484'}} />
                    </View>
                )
            }}
        />
        <Tabs.Screen name="Saved" component={SavedJob} 
            options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Feather name="bookmark" size={scale(18)} color="gray" style={{color:focused ? '#3F62A8' : '#848484'}}/>
                    </View>
                )
            }}
        />
        <Tabs.Screen name="Mails" component={Mails}
            options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Feather name="mail" size={scale(18)} style={{color:focused ? '#3F62A8' : '#848484'}} />
                        <View style={styles.footerPosition}>
                            <Text style={styles.footerNumber}>3</Text>
                        </View>  
                    </View>
                )
            }}
        />
        <Tabs.Screen name="Menu" component={Menu} 
            options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Feather name="menu" size={scale(18)} style={{color:focused ? '#3F62A8' : '#848484'}} />
                    </View>
                )
            }}
        />
    </Tabs.Navigator>
)

const MyTheme = {
    colors: {
      background: '#FFF',
    },
};

export default function RegisterRoute() {

    const[loaded] = useFonts({Poppins})
    if(!loaded){
        return<Text>Font is loading</Text>
    }

    return (
        <NavigationContainer theme={MyTheme}>
            <Drawer.Navigator initialRouteName="Onboarding1">
                <Drawer.Screen name="Onboarding1" component={Onboarding1}  options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Onboarding2" component={Onboarding2}  options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Onboarding3" component={Onboarding3}  options={{gestureEnabled: false}}/>
                <Drawer.Screen name="LogIn" component={LogIn}  options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register" component={Register} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register2" component={Register2} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register3" component={Register3} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register4" component={Register4} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register5" component={Register5} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register6" component={Register6} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register7" component={Register7} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register8" component={Register8} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register9" component={Register9} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register10" component={Register10} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Register11" component={Register11} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="ForgetPassWorld" component={ForgetPassWorld} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="ForgetPassWorld2" component={ForgetPassWorld2} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="ForgetPassWorld3" component={ForgetPassWorld3} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Homes" component={TabScreen} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="JobDetail" component={JobDetail} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Notifications" component={Notifications} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Language" component={Language} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Profile" component={Profile} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Contact" component={Contact} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Education" component={Education} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="AboutJob" component={AboutJob} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Experience" component={Experience} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="LangugeSkill" component={LangugeSkill} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="OtherSkill" component={OtherSkill} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="Qualification" component={Qualification} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="PR" component={PR} options={{gestureEnabled: false}}/>
                <Drawer.Screen name="ProfilePicAndRe" component={ProfilePicAndRe} options={{gestureEnabled: false}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = ScaledSheet.create({
    footerPosition:{
        position:'absolute',
        top:0,
        right:'-5@s',
        zIndex:1
    },
    footerNumber:{
        backgroundColor:'#F27E34',
        width:'12@s',
        height:'12@s',
        borderRadius:'25@s',
        color:'#fff',
        textAlign:'center',
        fontSize:'8@s',
    }
})