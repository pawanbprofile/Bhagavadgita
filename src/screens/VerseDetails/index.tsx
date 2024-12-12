import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import Title from '../../components/Title';
import Colors from '../../constants/Colors';
import Border from '../../components/DashedBorder';
import Translation from '../../components/Translation';

const VerseDetails = () => {
  const {verse, chapter} = useRoute().params;
  console.log('chapter ', chapter);
  console.log('verse details ', verse);
  return (
    <View style={styles.container}>
      <Title
        title={`chapter-${verse.chapter_number}-verse-${verse.verse_number}`}
      />

      <View
        style={{
          borderRadius: 6,
          backgroundColor: Colors.Zumthor,
          padding: 16,
        }}>
        <Text style={styles.text}>{verse.text}</Text>
        <Border />
        <Text style={styles.text}>{verse.transliteration}</Text>
      </View>
      <View
        style={{
          borderRadius: 6,
          backgroundColor: Colors.Zumthor,
          marginVertical: 8,
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 8,
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: Colors.maroon,
            fontWeight: 'bold',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          Translations
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={verse.translations}
          key={({item}) => item.id}
          renderItem={({item}) => <Translation item={item} />}
        />
      </View>
    </View>
  );
};

export default VerseDetails;
