import RegisterRoute from './Routes/RegisterRoute'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Platform, Alert} from 'react-native';
import axios from 'axios';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
      Alert.alert('1');
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

      // This listener is fired whenever a notification is received while the app is foregrounded
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });

      // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        Alert.alert(JSON.stringify(response))
        console.log(response);
      });

      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);

    return (
          <RegisterRoute />
    )
}



// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  Alert.alert('register');
  let token;
  Alert.alert(JSON.stringify(Constants.isDevice));
  if (Constants.isDevice) {
    Alert.alert('yes')
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    Alert.alert(JSON.stringify(finalStatus));
    if (existingStatus !== 'granted') {

      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    Alert.alert(JSON.stringify(finalStatus));
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
      return;
    }
    Alert.alert('getting token');
    try { 
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } catch (err) {
      Alert.alert('error occour in getting token')
      Alert.alert(JSON.stringify(err))
    }
    Alert.alert(JSON.stringify(token));    
    const arr = {
      answer1: "eee",
      answer2: "ddd",
      answer3: "dd",
      answer4: "1",
      bestAnswer: "2",
      questionTitle: token,
      syllabusId: 1,
      topicId: 1
    };
    postDataWithAxioAjax(arr);  
    // fetch('http://167.172.72.132:8081/api/questions/', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     questionTitle: token,
    //     answer1: ";;;;",
    //     answer2: "Hhh",
    //     answer3: "Jjjj",
    //     answer4: "Kkkk",
    //     bestAnswer: 1,
    //     syllabusId: 1        
    //   })
    // }).catch(err => {
    //   console.log(err);
    // })

  } else {
    Alert.alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  Alert.alert('evt was finished');    
  Alert.alert(JSON.stringify(token));    
  return token;
}



  function postDataWithAxioAjax(arr) {
    axios.post("http://167.172.72.132:8081/api/questions", arr).then(res => {
      console.log(res);
      console.log(res.data);  
      console.log(res.data.success);  
      Alert.alert(JSON.stringify(res.data))
      if ( res.data.success == true ) {
        Alert.alert('true');
      } else{
        Alert.alert('error');       
      }
    }).catch(err => {
      Alert.alert('Please specify all fields');
      console.log(err);
    })
  }