import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import backgroundImg from '../../assets/images/login-background.png';
import profilePlaceholderImg from '../../assets/images/profile-placeholder.png';
import cameraIcon from '../../assets/images/icons/camera.png';

import styles from './styles';

const Profile: React.FC = () => {
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

          <Text style={styles.profileName}>Marcelo Carvalho</Text>

          <Text style={styles.profileSubject}>Matemática</Text>
        </ImageBackground>
      </PageHeader>
    </View>
  );
};

export default Profile;
