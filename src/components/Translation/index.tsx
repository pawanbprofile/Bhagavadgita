import {View, Text} from 'react-native';
import React from 'react';
import {Translations} from '../../types';
import styles from './styles';

type TranslationProps = {
  item: Translations;
};
const Translation = ({item}: TranslationProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.author}>{item.author_name}</Text>
    </View>
  );
};

export default Translation;
