import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
    justifyContent: 'center',
  },

  bannerContainer: {
    flex: 1,
    padding: 40,
    backgroundColor: '#8257e5',
  },

  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileName: {
    marginLeft: 16,
    fontFamily: 'Poppins_400Regular',
    fontWeight: '500',
    fontSize: 12,
    color: '#d4c2ff',
  },

  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  logoutButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#774DD6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  banner: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 20,
    lineHeight: 30,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#9C98A6',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
});

export default styles;
