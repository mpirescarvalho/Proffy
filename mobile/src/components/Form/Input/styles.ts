import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
  },

  noBorder: {
    borderRadius: 0,
    borderWidth: 0,
  },

  textArea: {
    height: 360,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    padding: 16,
  },

  focusIndicator: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
    height: 40,
    width: 2,
    borderRadius: 5,
    backgroundColor: '#8257E5',
  },

  focusIndicatorOutsideLabel: {
    top: 32,
  },

  outsideLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#9C98A6',
    marginBottom: 8,
  },

  floatingLabel: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
    lineHeight: 54,
    color: '#9C98A6',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },

  floating: {
    top: -8,
    fontSize: 10,
    color: '#C1BCCC',
  },

  inputFloating: {
    paddingTop: 15,
  },
});

export default styles;
