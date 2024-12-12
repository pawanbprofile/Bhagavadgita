import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {Chapter} from '../../types';
import Colors from '../../constants/Colors';

type ChapterSummaryProps = {
  chapter: Chapter;
};
const ChapterSummary = ({chapter}: ChapterSummaryProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'left',
          width: '100%',
          textAlignVertical: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          color: Colors.Ming,
        }}
        numberOfLines={1}
        ellipsizeMode="middle">
        Chapter Summary :
      </Text>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Text style={styles.summary}>{chapter.chapter_summary}</Text>
      </ScrollView>
    </View>
  );
};

export default ChapterSummary;
