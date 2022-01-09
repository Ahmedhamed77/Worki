import React from 'react';

import {styles} from './style';
import {TextInput, TextInputProps, View} from 'react-native';

interface CommonInputProps extends TextInputProps {}

export const CommonInput: React.FC<CommonInputProps> = () => {
  return (
    <View style={styles.container}>
      <TextInput value="inpurt here" />
    </View>
  );
};
