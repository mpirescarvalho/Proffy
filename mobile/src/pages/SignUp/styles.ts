import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
  },

  topBar: {
    padding: 20,
    paddingHorizontal: 40,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
    backgroundColor: '#f0f0f7',
  },

  backButton: {
    padding: 8,
    margin: -8,
  },

  dots: {
    width: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#C1BCCC',
  },

  dotActive: {
    backgroundColor: '#8257E5',
  },

  textContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
  },

  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 32,
    color: '#32264D',
    maxWidth: 240,
  },

  subtitle: {
    marginTop: 16,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6A6180',
    maxWidth: 190,
  },

  viewPager: {
    flex: 2,
  },

  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  form: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  formTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    marginBottom: 24,
  },

  footerButton: {
    height: 58,
    marginTop: 24,
    backgroundColor: '#DCDCE5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  nextPageButtonEnabled: {
    backgroundColor: '#8257E5',
  },

  finishButtonEnabled: {
    backgroundColor: '#04D361',
  },

  footerButtonText: {
    fontFamily: 'Archivo_400Regular',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    color: '#9C98A6',
  },

  footerButtonTextEnabled: {
    color: '#fff',
  },
});

export default styles;
