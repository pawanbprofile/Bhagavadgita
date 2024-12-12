import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Verses from '../screens/Verses';
import VerseDetails from '../screens/VerseDetails';
import {Verse} from '../types';

type RootStackProps = {
  HomeScreen: undefined;
  Verses: {id: number};
  VerseDetails: {verse: Verse; chapter: number};
};
const Stack = createNativeStackNavigator<RootStackProps>();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Verses" component={Verses} />
        <Stack.Screen name="VerseDetails" component={VerseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
