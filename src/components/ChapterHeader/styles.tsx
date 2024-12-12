import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  detailsContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingHorizontal: 8,
    flexShrink: 1,
  },
  title: {
    flex: 1,
    width: '100%',
    fontSize: 20,
    color: Colors.Ming,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'justify',
    textAlignVertical: 'center',
  },
  verseCount: {
    fontSize: 20,
    color: Colors.Ming,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default styles;
