import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';

interface ImageAuthProps{
	source:ImageSourcePropType,
	resizeMode:string,
}

const ImageAuth = (ImageAuthProps) => {
  return (
  	<Image {...ImageAuthProps} />
  );
}

export default ImageAuth;