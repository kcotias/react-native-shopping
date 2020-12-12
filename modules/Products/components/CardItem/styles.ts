import { StyleSheet } from 'react-native';
import { Layout } from '../../../../constants';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    height: 120,
    marginBottom: 20,
    marginHorizontal: Layout.spacing.paddingX,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    padding: 15,
  },
  textArea: {
    width: '65%',
  },
  itemTitle: {
    color: '#152130',
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '600',
  },
  itemPrice: {
    color: 'green',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 4,
  },
  imgArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  img: {
    height: 100,
    width: 100,
  },
  counterArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
