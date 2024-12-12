import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

type TitleProps = {
  title: string;
};

const Title = ({title}: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;
