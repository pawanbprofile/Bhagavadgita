import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Gray,
    padding: 20,
  },
  verseItem: {
    width: 66,
    height: 66,
    backgroundColor: Colors.Zumthor,
    marginHorizontal: 2,
    marginVertical: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verseText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default styles;
