import React from 'react';
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import { email, eye } from '../../../../assets/images';
import ImageAuth from '../../../components/authentication/ImageAuth';
import TextInputAuth from '../../../components/authentication/TextInputAuth';
import TextAuth from '../../../components/authentication/TextAuth';

const LoginForm = () => {
	const [passwordSecured, setPasswordSecured] = React.useState(true);

	return(
		<View>
		    <View style={styles.inputView}>
          		<ImageAuth resizeMode='contain' style={styles.imageInput} source={email} />        
          		<TextInputAuth placeholder={"Enter your Email"}/>
        	</View>

        	<View style={styles.inputView}>
          		<TextInputAuth secureTextEntry={passwordSecured} textContentType='password' placeholder={"Password"}
          		/>
          		<TouchableOpacity
            		onPress={() => { setPasswordSecured(!passwordSecured);}}>
            		<ImageAuth resizeMode='contain' style={styles.imageInput} source={eye} />
          		</TouchableOpacity>
        	</View>
        	<TouchableOpacity style={styles.buttonBlockLogin} onPress={() => { Alert.alert('Login pressed');}}>
          		<TextAuth style={styles.buttonTextLogin}>Login</TextAuth>
        	</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
  inputView:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    width:'100%',
    borderColor:'#444',
  },
  imageInput:{
    width:20,
    height:20,
  },
  buttonBlockLogin:{
    marginVertical:20,
    borderWidth:1,
    display:'flex',
    alignItems:'center',
    paddingVertical: 12,
    justifyContent: 'center',
    backgroundColor:'#fff',
    borderRadius:8,
    borderColor:'#444',
    elevation: 2,
    shadowColor: '#1e6cab',
    shadowOffset:{
      width:2,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
  },
  buttonTextLogin:{
    color:'#444',
    fontSize:20,
  },
});

export default LoginForm;