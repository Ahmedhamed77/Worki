import React from 'react';

import {styles} from './style';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

interface CustomTextProps extends Omit<TextProps, 'style'> {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  subtitle?: boolean;
  customTextStyle?: StyleProp<TextStyle>;
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  h1,
  h2,
  h3,
  subtitle,
  customTextStyle,
  ...props
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        h1 && styles.h1Style,
        h2 && styles.h2Style,
        h3 && styles.h3Style,
        subtitle && styles.subtitle,
        customTextStyle,
      ]}
      {...props}>
      {children}
    </Text>
  );
};
