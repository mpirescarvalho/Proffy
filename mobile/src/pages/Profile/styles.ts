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

  scroll: {
    marginTop: -80,
  },

  form: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E6E6F0',
    padding: 24,
    alignItems: 'stretch',
    overflow: 'hidden',
  },

  sectionTitle: {
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 20,
    fontWeight: '500',
    color: '#32264D',
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6F0',
    marginBottom: 8,
  },

  inputContainer: {
    marginTop: 16,
  },

  input: {
    backgroundColor: '#FAFAFC',
    borderWidth: 1,
    borderColor: '#E6E6F0',
  },

  footer: {
    height: 105,
    backgroundColor: '#FAFAFC',
    marginHorizontal: -24,
    marginBottom: -24,
    marginTop: 24,
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#E6E6F0',
  },

  saveButton: {
    flex: 1,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#04D361',
    justifyContent: 'center',
    alignItems: 'center',
  },

  saveButtonText: {
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;
