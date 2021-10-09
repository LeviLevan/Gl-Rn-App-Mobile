import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import TextAuth from '../../../components/authentication/TextAuth';

const LoginAuthText = () => {
	return(
		<View>
			<TouchableOpacity>
		    <TextAuth style={styles.TextAuth}>Don't have an account? Register Now</TextAuth>
		  </TouchableOpacity>
			<TouchableOpacity>
		    <TextAuth style={styles.TextAuth}>Forgot Password</TextAuth>
		  </TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
  TextAuth:{
    paddingVertical:4,
    color:'#444',
    textAlign:'center',
  },
});

export default LoginAuthText;


