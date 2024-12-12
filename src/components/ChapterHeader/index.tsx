import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Chapter} from '../../types';
import ChapterNumber from '../ChapterNumber';
import Colors from '../../constants/Colors';

type ChapterHeaderProps = {
  chapter: Chapter;
};
const ChapterHeader = ({chapter}: ChapterHeaderProps) => {
  return (
    <View style={styles.container}>
      <ChapterNumber text={chapter.chapter_number} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="middle">
          {chapter.name_meaning}
        </Text>
        <Text style={styles.verseCount}>
          {`Verses ${chapter.verses_count}`}
        </Text>
      </View>
    </View>
  );
};

export default ChapterHeader;
