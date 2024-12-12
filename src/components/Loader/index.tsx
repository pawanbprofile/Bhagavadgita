import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import Colors from '../../constants/Colors';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.maroon} />
    </View>
  );
};

export default Loader;
