import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { styles } from './styles';
import { email, loginUrl, password } from '../../../config';
import useAuthController from '../../view-controllers/useAuthController';

export const SignInScreen = () => {
  const signIn = async () => { };
  const { setEmail, setPassword, loginWithAPI, loginData } = useAuthController()

  return (
    <View style={styles.container}>
      <TextInput placeholder="email" value={loginData.email} onChangeText={setEmail} style={styles.text} />
      <TextInput placeholder="password" value={loginData.password} onChangeText={setPassword} secureTextEntry style={styles.text} />
      <Button onPress={loginWithAPI} title="Sign In" />
    </View>
  );
};
