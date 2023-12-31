import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from './screens/SignIn';
import { CompaniesListScreen } from './screens/CompaniesList';
import { CompanyDetailsScreen } from './screens/CompanyDetails';
import { Provider } from 'react-redux';
import store from './store';
import { navigate, navigationRef } from './services/NavigationService';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ASSETS } from './assets';
import { styleGuide } from './styles/globalStyles';
import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE_ITEMS } from './constants/storageItems';

interface Props { // interface to declare "ReactNode" type to children props
  children?: ReactNode
}

export const ReduxProvider = ({ children, ...props }: Props) => (
  <Provider store={store}>{children}</Provider>
)

const Stack = createNativeStackNavigator();

export const App = () => {
  const linking = {
    prefixes: ['seedrsdemo://'],
    config: {
      screens: {
        CompaniesList: { path: 'companies' },
        CompanyDetails: { path: 'company/:id' },
      },
    }
  };
  return (
    <ReduxProvider>
      <NavigationContainer linking={linking} ref={navigationRef}>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ title: 'Sign In' }}
          />
          <Stack.Screen
            name="CompaniesList"
            component={CompaniesListScreen}
            options={{
              title: 'Companies',
              headerRight: _ =>
                <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={_ => {
                    navigate('SignIn')
                    AsyncStorage.removeItem(STORAGE_ITEMS.TOKEN)
                  }}
                >
                  <Image
                    source={ASSETS.logout}
                    style={styles.logoutIc}
                    resizeMode='contain'
                  />
                </TouchableOpacity>,
              headerLeft: _ => <View />
            }}
          />
          <Stack.Screen
            name="CompanyDetails"
            component={CompanyDetailsScreen}
            options={{ title: 'Company Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};


export const styles = StyleSheet.create({
  logoutIc: {
    height: 20,
    width: 20,
  },
  btnContainer: {
    padding: styleGuide.padding
  }
});