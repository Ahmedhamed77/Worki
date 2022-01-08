import React from 'react';

import {AuthStack} from './src/navigation/authStack';
import {withProviders} from './src/shared';

const App = () => {
  return <AuthStack />;
};

export default withProviders(App);
