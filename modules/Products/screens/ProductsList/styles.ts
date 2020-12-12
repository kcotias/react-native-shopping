import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gradient: {
    flex: 1,
  },
  skeletonContainer: {
    height: 120,
    width: '100%',
    marginBottom: 20,
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
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
});
