import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { StackActions, useNavigation } from '@react-navigation/native';

import imgBackground from '../../assets/images/signup-success-background.png';
import imgDone from '../../assets/images/done.png';

import styles from './styles';

const SignUpSuccess: React.FC = () => {
  const { dispatch } = useNavigation();

  function handleGoToLogin() {
    dispatch(StackActions.replace('SignIn'));
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={imgBackground}
        resizeMode="contain"
      >
        <Image source={imgDone} />
        <Text style={styles.title}>Cadastro{'\n'}concluído!</Text>
        <Text style={styles.subtitle}>
          Agora você faz parte da{'\n'}plataforma da Proffy
        </Text>
      </ImageBackground>

      <RectButton onPress={handleGoToLogin} style={styles.Button}>
        <Text style={styles.ButtonText}>Fazer login</Text>
      </RectButton>
    </View>
  );
};

export default SignUpSuccess;
