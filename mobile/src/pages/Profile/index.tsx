import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import {
  BorderlessButton,
  RectButton,
  ScrollView,
} from 'react-native-gesture-handler';

import api from '../../services/api';
import useAuth from '../../contexts/auth';

import backgroundImg from '../../assets/images/login-background.png';
import profilePlaceholderImg from '../../assets/images/profile-placeholder.png';
import cameraIcon from '../../assets/images/icons/camera.png';

import PageHeader from '../../components/PageHeader';
import { Input } from '../../components/Form';

import styles from './styles';

const Profile: React.FC = () => {
  const { user } = useAuth();

  const [name, setName] = useState(user?.name.split(' ')[0]);
  const [lastName, setLastName] = useState(user?.name.split(' ')[1]);
  const [email, setEmail] = useState(user?.email);
  const [whatsapp, setWhatsapp] = useState(user?.whatsapp);
  const [bio, setBio] = useState(user?.bio);

  return (
    <View style={styles.container}>
      <PageHeader page="Meu perfil">
        <ImageBackground
          style={styles.headerInfo}
          resizeMode="contain"
          source={backgroundImg}
        >
          <View>
            <Image style={styles.profileImg} source={profilePlaceholderImg} />

            <RectButton style={styles.cameraButton}>
              <Image source={cameraIcon} />
            </RectButton>
          </View>

          <Text style={styles.profileName}>{user?.name}</Text>

          <Text style={styles.profileSubject}>Matemática</Text>
        </ImageBackground>
      </PageHeader>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <View style={styles.form}>
          <Text style={styles.sectionTitle}>Seus dados</Text>

          <Input
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            label="Nome"
            labelKind="outside"
            keyboardType="default"
            autoCapitalize="words"
            value={name}
            onChangeText={setName}
          />

          <Input
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            label="Sobrenome"
            labelKind="outside"
            keyboardType="default"
            autoCapitalize="words"
            value={lastName}
            onChangeText={setLastName}
          />

          <Input
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            label="E-mail"
            labelKind="outside"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Input
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            label="Whatsapp"
            labelKind="outside"
            keyboardType="numeric"
            value={whatsapp}
            onChangeText={setWhatsapp}
          />

          <Input
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            label="Biografia"
            labelKind="outside"
            keyboardType="default"
            textArea
            value={bio}
            onChangeText={setBio}
          />

          <View style={styles.footer}>
            <RectButton onPress={handleSubmit} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Salvar alterações</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
