import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    padding: 20,
    height: '100%',
    alignItems: 'center',
  },
});

export default styles;
