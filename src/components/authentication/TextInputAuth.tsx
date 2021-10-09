import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

interface TextInputAuthProps{
	
}

const TextInputAuth = (TextInputAuthProps) => {
  return (
  	<TextInput {...TextInputAuthProps} style={styles.input}/>
  );
}

const styles = StyleSheet.create({
    input:{
	    flex:1,
	    height: 'auto',
	    width: 'auto',
	    paddingHorizontal: 10,
	    paddingVertical:10,
	    color:'#444',
  	},
});

export default TextInputAuth;