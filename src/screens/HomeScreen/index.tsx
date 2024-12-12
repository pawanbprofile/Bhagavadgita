import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Colors from '../../constants/Colors';
import {useGetChaptersQuery, useGetVersesQuery} from '../../redux/GitaApiSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import Title from '../../components/Title';
import Chapter from '../../components/ChapterItem';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ChapterItem from '../../components/ChapterItem';
import Loader from '../../components/Loader';

const HomeScreen = () => {
  const {data, isLoading, isSuccess} = useGetChaptersQuery();
  console.log('is loading ', isLoading);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.Gray} />
      <View style={styles.container}>
        {isLoading ? (
          <Loader />
        ) : (
          <SwiperFlatList
            data={data}
            renderItem={({item}) => <ChapterItem chapter={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
