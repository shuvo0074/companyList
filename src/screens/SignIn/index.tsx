import React, { useEffect } from 'react';
import { View, Button, TextInput } from 'react-native';
import { styles } from './styles';
import useAuthController from '../../view-controllers/useAuthController';
import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE_ITEMS } from '../../constants/storageItems';
import { navigate } from '../../services/NavigationService';

export const SignInScreen = () => {

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
      <TextInput placeholder="email" value={loginData.email} onChangeText={setEmail} style={styles.text} />
      <TextInput placeholder="password" value={loginData.password} onChangeText={setPassword} secureTextEntry style={styles.text} />
      <Button onPress={loginWithAPI} title="Sign In" />
    </View>
  );
};
