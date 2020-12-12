import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../../constants';

export default StyleSheet.create({
  logoContainer: {
    height: Layout.window.height / 3.5,
  },
  gradient: {
    flex: 1,
  },
  textWrapper: {
    paddingHorizontal: Layout.spacing.paddingX,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  welcomeText: {
    fontWeight: '800',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  appTitle: {
    fontWeight: '800',
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: Colors.pallete.primaryDark,
    marginHorizontal: Layout.spacing.paddingX + 40,
    borderRadius: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
});
