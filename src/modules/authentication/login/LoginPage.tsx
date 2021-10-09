import React from 'react';
import {StyleSheet, View} from 'react-native';
import { login } from '../../../../assets/images';
import ImageAuth from '../../../components/authentication/ImageAuth';
import LoginForm from './LoginForm';
import LoginAuthText from './LoginAuthText';

const LoginPage = () => {

  return (
    <View style={styles.containerBox}>

        <View style={styles.containerImage}>
          <ImageAuth style={styles.imageLogin} resizeMode={'contain'} source={login}/>
        </View>

        <LoginForm/>
        <LoginAuthText/>
        
    </View> 
  );
};

const styles = StyleSheet.create({
  containerImage:{
    alignItems:'center',
  },
  imageLogin:{
    width:170,
    height:170,
  },
  containerBox : {
    shadowColor: "#444",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical:35,
    width:'85%',
    borderRadius:8,
  },
});

export default LoginPage;