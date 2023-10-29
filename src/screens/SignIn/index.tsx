import React, { useEffect, useRef, useState } from 'react';
import { View, Button, TextInput, Animated, Keyboard } from 'react-native';
import { styles } from './styles';
import useAuthController from '../../view-controllers/useAuthController';
import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE_ITEMS } from '../../constants/storageItems';
import { navigate } from '../../services/NavigationService';
import { ASSETS } from '../../assets';

export const SignInScreen = () => {
  const logoDimension = useRef(new Animated.Value(200)).current;
  const [kbOpen, setKbOpen] = useState(false)
  const emailInputRef = useRef<any>(null)

  useEffect(() => {
    setTimeout(() => {
      if (emailInputRef.current)
        emailInputRef.current.focus()
    }, 1500)
  }, [])

  useEffect(() => {
    const showKBlistener = Keyboard.addListener('keyboardDidHide', () => setKbOpen(false));
    const hideKBListener = Keyboard.addListener('keyboardDidShow', () => setKbOpen(true));
    return () => {
      showKBlistener.remove()
      hideKBListener.remove()
    }
  }, []);

  useEffect(() => {
    if (kbOpen) {
      Animated.timing(logoDimension, {
        useNativeDriver: false,
        toValue: 100,
        duration: 1000
      }).start();
    }
    else
      Animated.timing(logoDimension, {
        useNativeDriver: false,
        toValue: 200,
        duration: 500
      }).start();
  }, [kbOpen])
  const { setEmail, setPassword, loginWithAPI, loginFromData, loginData, isLoggedIn } = useAuthController()
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_ITEMS.TOKEN)
      .then(token => {
        if (token) {
          navigate('CompaniesList')
          loginFromData({ token })
        }
      })
  }, [isLoggedIn])
  return (
    <View style={styles.container}>
      <Animated.Image style={{
        alignSelf: 'center',
        width: logoDimension,
        height: logoDimension
      }} source={ASSETS.logo} resizeMode="contain" />
      <TextInput ref={emailInputRef} placeholder="email" value={loginData.email} onChangeText={setEmail} style={styles.text} />
      <TextInput placeholder="password" value={loginData.password} onChangeText={setPassword} secureTextEntry style={styles.text} />
      <Button onPress={loginWithAPI} title="Sign In" />
    </View>
  );
};