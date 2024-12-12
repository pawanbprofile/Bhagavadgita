import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 8,
    borderColor: Colors.Zumthor,
    backgroundColor: Colors.Zumthor,
    borderWidth: 1,
    borderRadius: 6,
  },
  number: {fontSize: 40, fontWeight: '600', color: Colors.Ming},
  chapter: {fontSize: 16, color: Colors.Ming, fontWeight: '500'},
});

export default styles;
