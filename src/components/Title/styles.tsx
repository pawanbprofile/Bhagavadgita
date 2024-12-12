import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    backgroundColor: Colors.Ming,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color: Colors.cream,
    padding: 2,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default styles;
