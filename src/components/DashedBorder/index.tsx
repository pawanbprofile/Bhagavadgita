import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

type BorderProps = {
  isSolid?: boolean;
};
const Border = ({isSolid}: BorderProps) => {
  return (
    <View
      style={[styles.border, {borderStyle: isSolid ? 'solid' : 'dashed'}]}
    />
  );
};

const styles = StyleSheet.create({
  border: {
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    borderBottomColor: Colors.Ming,
    marginVertical: 4,
  },
});

export default Border;
