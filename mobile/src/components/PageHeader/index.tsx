import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
  title?: string;
  page?: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  page,
  children,
}) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <BorderlessButton onPress={handleGoBack}>
            <Image source={backIcon} resizeMode="contain" />
          </BorderlessButton>
        </View>

        {page && <Text style={styles.pageText}>{page}</Text>}

        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Image source={logoImg} resizeMode="contain" />
        </View>
      </View>

      {(children || title) && (
        <View style={styles.body}>
          {title && (
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              {headerRight}
            </View>
          )}

          {children}
        </View>
      )}
    </View>
  );
};

export default PageHeader;
