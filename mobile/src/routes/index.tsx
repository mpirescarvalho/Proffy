import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import useAuth from '../contexts/auth';

import SignInStack from './SignInStack';
import AppStack from './AppStack';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {!!user ? <AppStack /> : <SignInStack />}
    </NavigationContainer>
  );
};

export default Routes;
