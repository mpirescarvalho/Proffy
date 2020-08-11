import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257E5',
  },

  imgBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginTop: 24,
  },

  subtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#D4C2FF',
    marginTop: 16,
  },

  Button: {
    height: 58,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#04D361',
  },

  ButtonText: {
    fontFamily: 'Archivo_400Regular',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    color: '#fff',
  },
});

export default styles;
