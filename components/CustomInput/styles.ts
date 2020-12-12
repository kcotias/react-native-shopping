import { StyleSheet } from 'react-native';
import { Layout } from '../../constants';

export default StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    height: 60,
    margin: Layout.spacing.paddingX,
    borderRadius: 50,
    paddingLeft: 20,
    fontSize: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
