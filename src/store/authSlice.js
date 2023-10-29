import { createSlice } from '@reduxjs/toolkit';
import { email, password } from '../../config';
import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE_ITEMS } from '../constants/storageItems';
import { navigate } from '../services/NavigationService';

const INITIAL_USER = {
  id: -1
}

const INITIAL_LOGIN_DATA = {
  email,
  password
}

const initialState = {
  user: INITIAL_USER,
  isLoggedIn: false,
  loginData: INITIAL_LOGIN_DATA
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.user = INITIAL_USER
      state.isLoggedIn = false
      AsyncStorage.removeItem(STORAGE_ITEMS.TOKEN)
      navigate('SignIn')
    },
    updateLoginData: (state, action) => {
      state.loginData = { ...state.loginData, ...action.payload }
    },
  },
});

const { signIn, signOut, updateLoginData } = authSlice.actions;

export const authAction = {
  signIn, signOut, updateLoginData
};

export default authSlice.reducer;
