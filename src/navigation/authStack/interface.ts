import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum AuthParams {
  login = 'login',
}

export type AuthParamList = {
  [AuthParams.login]: NO_PARAMS;
};

export type AuthNavigation = StackNavigationProp<AuthParamList, AuthParams>;
