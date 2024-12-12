import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Gray,
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: Colors.maroon,
    fontWeight: '500',
    textAlign: 'justify',
    textAlignVertical: 'center',
    paddingHorizontal: 2,
  },
});

export default styles;
