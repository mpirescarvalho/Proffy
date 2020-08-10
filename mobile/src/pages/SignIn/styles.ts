import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
  },

  header: {
    flex: 1,
    backgroundColor: '#8257E5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 160,
  },

  description: {
    fontFamily: 'Poppins_400Regular',
    width: 160,
    paddingRight: 30,
    marginTop: 6,
    color: '#d4c2ff',
  },

  body: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bodyTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    lineHeight: 34,
    color: '#32264D',
  },

  signUpButtonText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 24,
    color: '#8257E5',
  },

  inputGroup: {
    marginVertical: 24,
  },

  checkboxLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 24,
    color: '#9C98A6',
  },

  forgotPasswordText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 24,
    color: '#9C98A6',
  },

  loginButton: {
    height: 58,
    marginTop: 24,
    backgroundColor: '#DCDCE5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  loginButtonEnabled: {
    backgroundColor: '#04D361',
  },

  loginButtonText: {
    fontFamily: 'Archivo_400Regular',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    color: '#9C98A6',
  },

  loginButtonTextEnabled: {
    color: '#fff',
  },
});

export default styles;
