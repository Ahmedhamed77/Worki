import React from 'react';

import {styles} from './style';
import {StyleProp, View, ViewStyle} from 'react-native';
import {CustomText} from '../CustomText';

interface CustomButtonProps extends Omit<ViewStyle, 'style'> {
  buttonTitle: string;
  buttonStyle?: StyleProp<ViewStyle>;
  customTextProps?: CustomButtonProps;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  buttonTitle,
  buttonStyle,
  customTextProps,
  ...props
}) => {
  return (
    <View style={[styles.container, buttonStyle]} {...props}>
      <CustomText
        subtitle
        customTextStyle={styles.ButtonText}
        {...customTextProps}>
        {buttonTitle}
      </CustomText>
    </View>
  );
};
