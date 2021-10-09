import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginPage from './src/modules/authentication/login/LoginPage';

const App = () => {

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.containerStyle}>
      <StatusBar style="auto"/>

      <LoginPage/>
      
    </KeyboardAwareScrollView>
  );

};

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    flexGrow: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;