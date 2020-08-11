import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation, StackActions } from '@react-navigation/native';

import api from '../../services/api';

import backIcon from '../../assets/images/icons/back-in-light.png';

import styles from './styles';
import { InputGroup, Input } from '../../components/Form';

const SignUp: React.FC = () => {
  const viewPager = useRef<ViewPager>(null);
  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);

  const [page, setPage] = useState(0);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  let ScreenHeight = Dimensions.get('window').height;

  function handleGoToFirstPage() {
    viewPager.current?.setPage(0);
    nameRef.current?.focus();
  }

  function handleGoToSecondPage() {
    viewPager.current?.setPage(1);
    emailRef.current?.focus();
  }

  function handleGoBack() {
    if (page === 0) {
      navigation.goBack();
    } else {
      handleGoToFirstPage();
    }
  }

  async function handleSubmitSignUp() {
    await api.post('users', {
      name: `${name.trim()} ${lastName.trim()}`,
      email,
      password,
    });
    navigation.dispatch(StackActions.replace('SignUpSuccess'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton style={styles.backButton} onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <View style={styles.dots}>
          <View style={[styles.dot, page === 0 && styles.dotActive]} />
          <View style={[styles.dot, page === 1 && styles.dotActive]} />
        </View>
      </View>

      <KeyboardAvoidingView
        contentContainerStyle={{
          flex: 1,
        }}
        style={{
          height: ScreenHeight - 90,
        }}
        behavior="position"
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Crie sua conta gratuíta</Text>
          <Text style={styles.subtitle}>
            Basta preencher esses dados e você estará conosco.
          </Text>
        </View>

        <ViewPager
          ref={viewPager}
          style={styles.viewPager}
          scrollEnabled={false}
          onPageSelected={e => setPage(e.nativeEvent.position)}
        >
          <View style={styles.page} key="0">
            <View style={styles.form}>
              <Text style={styles.formTitle}>01. Quem é você?</Text>

              <InputGroup>
                <Input
                  inputRef={nameRef}
                  value={name}
                  onChangeText={setName}
                  label="Nome"
                  labelKind="floating"
                  keyboardType="default"
                  autoCapitalize="words"
                />

                <Input
                  value={lastName}
                  onChangeText={setLastName}
                  label="Sobrenome"
                  labelKind="floating"
                  keyboardType="default"
                  autoCapitalize="words"
                />
              </InputGroup>

              <RectButton
                enabled={!!name && !!lastName}
                onPress={handleGoToSecondPage}
                style={[
                  styles.footerButton,
                  !!name && !!lastName ? styles.nextPageButtonEnabled : {},
                ]}
              >
                <Text
                  style={[
                    styles.footerButtonText,
                    !!name && !!lastName ? styles.footerButtonTextEnabled : {},
                  ]}
                >
                  Próximo
                </Text>
              </RectButton>
            </View>
          </View>

          <View style={styles.page} key="1">
            <View style={styles.form}>
              <Text style={styles.formTitle}>02. Email e Senha</Text>

              <InputGroup>
                <Input
                  inputRef={emailRef}
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
                  keyboardType="default"
                  autoCapitalize="none"
                  secureTextEntry
                />
              </InputGroup>

              <RectButton
                enabled={!!email && !!password}
                onPress={handleSubmitSignUp}
                style={[
                  styles.footerButton,
                  !!email && !!password ? styles.finishButtonEnabled : {},
                ]}
              >
                <Text
                  style={[
                    styles.footerButtonText,
                    !!email && !!password ? styles.footerButtonTextEnabled : {},
                  ]}
                >
                  Concluir cadastro
                </Text>
              </RectButton>
            </View>
          </View>
        </ViewPager>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
