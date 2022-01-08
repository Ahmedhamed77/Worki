import React from 'react';

import {styles} from './style';
import {SafeAreaView} from 'react-native';
import {CustomButton, CustomText, PressableCard} from '../../../shared';

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText h1>Hello</CustomText>
      <PressableCard>
        <CustomButton buttonTitle="welcome" />
      </PressableCard>
    </SafeAreaView>
  );
};
