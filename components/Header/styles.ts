import { StyleSheet } from 'react-native';
import { Layout } from '../../constants';

export default StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.spacing.paddingX,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
});
