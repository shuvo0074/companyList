import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Keyboard } from 'react-native';
import { styles } from './styles';
import useAuthController from '../../view-controllers/useAuthController';
import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE_ITEMS } from '../../constants/storageItems';
import { navigate } from '../../services/NavigationService';
import { ASSETS } from '../../assets';
import LoginFormWithMemo from '../../components/LoginForm';

export const SignInScreen = () => {
  const logoDimension = useRef(new Animated.Value(200)).current;
  const [kbOpen, setKbOpen] = useState(false)

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
  const { loginWithAPI, loginFromData, isLoggedIn } = useAuthController()
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
      <LoginFormWithMemo
        onSubmit={loginWithAPI}
      />
    </View>
  );
};