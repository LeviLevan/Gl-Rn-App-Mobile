import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

interface TextAuthProps{
  children:string,
}

const TextAuth = (TextAuthProps) => {
  return (
      <Text {...TextAuthProps}>{TextAuthProps.children}</Text>
  );
}

export default TextAuth;