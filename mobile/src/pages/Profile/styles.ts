import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
  },

  headerInfo: {
    marginTop: 30,
    marginBottom: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImg: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },

  cameraButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#04D361',
  },

  profileName: {
    marginTop: 24,
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    color: '#fff',
  },

  profileSubject: {
    marginTop: 4,
    marginBottom: 8,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#D4C2FF',
  },
});

export default styles;
