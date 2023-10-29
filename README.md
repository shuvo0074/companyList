# Technical Challenge For Seedrs

This repo contains a basic react-native app with 3 screens:

- Sign in
- Companies List
- Company Details

To get the project up and running, you will need to run `yarn` and `npx pod-install` (for iOS). You should then be able to run `yarn start` followed by `yarn ios` for iOS or `yarn android` for Android, assuming you have followed the instructions in the [react native documentation](https://reactnative.dev/docs/environment-setup). 

Once you have the project up and running, you should see the login screen.

## Accomplished tasks
- Login with API
- Fetch companies list
- Fetch company details from graphQL query
- Added simple animation on login screen
- Added Deep link
- Configured a simple test script for [<`LoginForm`>](src/components/LoginForm.js) component

### Deep link
Deep link URL is [`seedrsdemo://company/{company_id}`](seedrsdemo://company/30638) 
- i.e. [`seedrsdemo://company/30638`](seedrsdemo://company/30638)

### Test with jest

Login form component can be found [here](src/components/LoginForm.js)

The test is done on this component

### coding pattern

`MVVM` coding pattern is used in this codebase