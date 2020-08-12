import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';
import useAuth from '../../contexts/auth';

import landingImg from '../../assets/images/landing.png';
import profilePlaceholderImg from '../../assets/images/profile-placeholder.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import logoutIcon from '../../assets/images/icons/logout.png';

import styles from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  const { user, signOut } = useAuth();

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <Image
              resizeMode="contain"
              style={styles.profileImg}
              source={
                user?.avatar ? { uri: user.avatar } : profilePlaceholderImg
              }
            />
            <Text style={styles.profileName}>{user?.name}</Text>
          </View>
          <RectButton onPress={handleSignOut} style={styles.logoutButton}>
            <Image resizeMode="contain" source={logoutIcon} />
          </RectButton>
        </View>

        <Image style={styles.banner} source={landingImg} />
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.title}>
          Seja bem-vindo, {'\n'}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleNavigateToStudyPages}
            style={[styles.button, styles.buttonPrimary]}
          >
            <Image source={studyIcon} />

            <Text style={styles.buttonText}>Estudar</Text>
          </RectButton>

          <RectButton
            onPress={handleNavigateToGiveClassesPage}
            style={[styles.button, styles.buttonSecondary]}
          >
            <Image source={giveClassesIcon} />

            <Text style={styles.buttonText}>Dar aulas</Text>
          </RectButton>
        </View>

        <Text style={styles.totalConnections}>
          Total de {totalConnections} conexões já realizadas {` `}{' '}
          <Image source={heartIcon} />
        </Text>
      </View>
    </View>
  );
};

export default Landing;
