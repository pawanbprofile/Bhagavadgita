import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Colors from '../../constants/Colors';

type ChapterNumberProps = {
  text: number;
};
const ChapterNumber = ({text}: ChapterNumberProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{text}</Text>
      <Text style={styles.chapter}>Chapter</Text>
    </View>
  );
};

export default ChapterNumber;
