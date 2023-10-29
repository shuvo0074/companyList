import React, { useEffect, useRef } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';
import { colors, styleGuide } from '../styles/globalStyles';
import useAuthController from '../view-controllers/useAuthController';


const LoginForm = ({ onSubmit }) => {
  const { setEmail, setPassword, loginData } = useAuthController()

  const emailInputRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      if (emailInputRef.current)
        emailInputRef.current.focus()
    }, 1500)
  }, [])


  return (
    <View>
      <TextInput ref={emailInputRef} placeholder="email" value={loginData.email} onChangeText={setEmail} style={styles.text} />
      <TextInput placeholder="password" value={loginData.password} onChangeText={setPassword} secureTextEntry style={styles.text} />
      <Button onPress={onSubmit} title="Sign In" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: styleGuide.padding,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.light,
    paddingVertical: styleGuide.padding,
  }
});
const LoginFormWithMemo = React.memo(LoginForm)

export default LoginFormWithMemo;
