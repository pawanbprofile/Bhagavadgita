import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  summary: {
    fontSize: 20,
    textAlign: 'justify',
    marginVertical: 10,
    letterSpacing: 0.25,
    fontWeight: '500',
    color: Colors.maroon,
  },
});
export default styles;
