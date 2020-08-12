import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257e5',
  },

  topBar: {
    backgroundColor: '#774DD6',
    borderBottomWidth: 1,
    borderBottomColor: '#6842C2',
    height: 90,
    paddingTop: 30,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  body: {
    paddingHorizontal: 40,
    paddingBottom: 40,
  },

  pageText: {
    textAlign: 'center',
    fontFamily: 'Archivo_400Regular',
    fontWeight: '500',
    fontSize: 14,
    color: '#D4C2FF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
});

export default styles;
