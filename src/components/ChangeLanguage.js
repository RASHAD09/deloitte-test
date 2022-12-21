import { changelanguage } from '../actions//UserActions';
import { useTheme } from '@react-navigation/native';
import { getUser } from '../selectors/UserSelectors';
import RNRestart from 'react-native-restart';
import React, { useState } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Button} from './Button';
import {strings} from '../localization';





function ChangeLanguage() {

  const user = useSelector(getUser);
const dispatch = useDispatch()

  const handlechangeLanguage = () => {
    if (user?.language === 'en') {
      
      dispatch(changelanguage('ar'));
    } else {
      dispatch(changelanguage('en'));
    }
    RNRestart.Restart();

  };


  return (
    <View style={styles.button}>
      <Button
        title={strings.login.Switchto}
        onPress={() => {handlechangeLanguage()}}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    width: '60%',

  },
});

export default ChangeLanguage;
