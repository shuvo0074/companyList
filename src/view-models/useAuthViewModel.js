import { useSelector, useDispatch } from 'react-redux';
import { authAction } from '../store/authSlice';
import { loginUrl } from '../../config';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE_ITEMS } from '../constants/storageItems';
import { navigate } from '../services/NavigationService';

const useAuthViewModel = () => {
  const dispatch = useDispatch();
  const {
    user,
    isLoggedIn,
    loginData
  } = useSelector(state => state.auth);

  const { signIn, signOut, updateLoginData } = authAction;

  return {
    user,
    isLoggedIn,
    loginData,
    setEmail: email => dispatch(updateLoginData({ email })),
    setPassword: password => dispatch(updateLoginData({ password })),
    loginWithAPI: () => {
      axios.post(loginUrl, loginData)
        .then(res => {
          if (res.status === 200) {
            AsyncStorage.setItem(STORAGE_ITEMS.TOKEN, res.data.token)
            navigate('CompaniesList')
            dispatch(signIn({ ...loginData, token: res.data.token }))
          }
        })
        .catch(e => console.log(e))
    },
    loginFromData: data => {
      dispatch(signIn({ ...loginData, ...data }))
    },
    logout: () => {
      dispatch(signOut())
    },
  };
};

export default useAuthViewModel;
