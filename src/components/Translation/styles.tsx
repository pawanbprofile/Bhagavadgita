import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Zumthor,
    margin: 8,
    flexShrink: 1,
    width: '100%',
  },
  description: {
    fontSize: 16,
    color: Colors.maroon,
    fontWeight: '400',
    textAlign: 'left',
    textAlignVertical: 'center',
    flexWrap: 'wrap',
  },
  author: {
    fontSize: 16,
    color: Colors.maroon,
    fontWeight: '600',
    textAlign: 'right',
    textAlignVertical: 'center',
    flexWrap: 'wrap',
  },
});

export default styles;
