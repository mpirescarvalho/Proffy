import React, { useState, useEffect } from 'react';
import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box';
import {
  View,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import loginBgImg from '../../assets/images/login-background.png';
import logoImg from '../../assets/images/logo-big.png';
import checkboxIcon from '../../assets/images/icons/checkbox.png';
import checkboxCheckedIcon from '../../assets/images/icons/checkbox-checked.png';

import useAuth from '../../contexts/auth';

import { Input, InputGroup } from '../../components/Form';

import styles from './styles';

const SignIn: React.FC = () => {
  const [formValid, setFormValid] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const { navigate } = useNavigation();

  let ScreenHeight = Dimensions.get('window').height;

  useEffect(() => {
    setFormValid(!!email && !!password);
  }, [email, password]);

  function handleSignIn() {
    signIn(email, password, checkbox);
  }

  function handleNewAccountClick() {
    navigate('SignUp');
  }

  return (
    <KeyboardAvoidingView
      style={{ height: ScreenHeight }}
      contentContainerStyle={styles.container}
      behavior="position"
    >
      <ImageBackground
        source={loginBgImg}
        resizeMode="center"
        style={styles.header}
      >
        <Image resizeMode="contain" style={styles.logo} source={logoImg} />
        <Text style={styles.description}>
          Sua plataforma de estudos online.
        </Text>
      </ImageBackground>

      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.bodyTitle}>Fazer login</Text>

          <TouchableOpacity onPress={handleNewAccountClick}>
            <Text style={styles.signUpButtonText}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>

        <InputGroup style={styles.inputGroup}>
          <Input
            value={email}
            onChangeText={setEmail}
            label="E-mail"
            labelKind="floating"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            value={password}
            onChangeText={setPassword}
            label="Senha"
            labelKind="floating"
            autoCapitalize="none"
            secureTextEntry
          />
        </InputGroup>

        <View style={styles.row}>
          <CheckBox
            style={{ flex: 1 }}
            onClick={() => {
              setCheckbox(!checkbox);
            }}
            isChecked={checkbox}
            rightText="Lembrar-me"
            rightTextStyle={styles.checkboxLabel}
            checkedImage={<Image source={checkboxCheckedIcon} />}
            unCheckedImage={<Image source={checkboxIcon} />}
          />

          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <RectButton
          enabled={formValid}
          onPress={handleSignIn}
          style={[
            styles.loginButton,
            formValid ? styles.loginButtonEnabled : {},
          ]}
        >
          <Text
            style={[
              styles.loginButtonText,
              formValid ? styles.loginButtonTextEnabled : {},
            ]}
          >
            Entrar
          </Text>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
