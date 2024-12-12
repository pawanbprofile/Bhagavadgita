import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import Title from '../../components/Title';
import {useGetChaptersQuery, useGetVersesQuery} from '../../redux/GitaApiSlice';
import Loader from '../../components/Loader';
import Colors from '../../constants/Colors';

const Verses = () => {
  const {id} = useRoute().params;
  const navigation = useNavigation();
  const {data, isLoading, isSuccess} = useGetVersesQuery(id);
  console.log('data ', data);
  return (
    <View style={styles.container}>
      {id ? <Title title={`Chapter ${id}`} /> : null}
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            {data?.map(item => (
              <TouchableOpacity
                style={styles.verseItem}
                key={item.id}
                onPress={() =>
                  navigation.navigate('VerseDetails', {
                    verse: item,
                    chapter: id,
                  })
                }>
                <Text style={styles.verseText}>{item.verse_number}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Verses;
