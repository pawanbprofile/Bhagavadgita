import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../Title';

import {Chapter} from '../../types';
import styles from './styles';
import ChapterHeader from '../ChapterHeader';
import ChapterNumber from '../ChapterNumber';
import ChapterSummary from '../ChapterSummary';
import Colors from '../../constants/Colors';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import {useNavigation} from '@react-navigation/native';

type ChapterProps = {
  chapter: Chapter;
};
const ChapterItem = ({chapter}: ChapterProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Title title={chapter.name} />
        <ChapterHeader chapter={chapter} />
        <ChapterSummary chapter={chapter} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Verses', {
              id: chapter.id,
            })
          }
        style={{
            width: '90%',
            padding: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.Ming,
            borderRadius: 8,
            marginVertical: 8,
          }}>
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: 20,
              color: Colors.cream,
            }}>
            Verse List
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChapterItem;
