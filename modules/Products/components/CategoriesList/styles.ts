import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 0,
    marginBottom: 20,
    height: 45,
  },
  buttonContainer: {
    height: 40,
    width: 100,
    marginRight: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
  },
});
