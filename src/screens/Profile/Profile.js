import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions/UserActions';
import {Button} from '../../components/Button/';
import {useSelector} from 'react-redux';
import {getUser} from '../../selectors/UserSelectors';
import {strings} from '../../localization';
import {styles} from '../Profile/Profile.styles';
import {typography} from '../../theme';
import ChangeLanguage from '@/components/ChangeLanguage';

export function Profile() {
  const {colors} = useTheme();
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInside}>
        <Text style={[typography.title, styles.title, {color: colors.text}]}>
          {strings.profile.header}
        </Text>
        <ChangeLanguage />
      </View>

      <Text style={[typography.title, {color: colors.text}]}>
        {strings.profile.UsernameP} : {user?.username}
      </Text>

      <Text style={[typography.title, {color: colors.text}]}>
        {strings.profile.BirthDate} : {user?.date}
      </Text>
      <Text style={[typography.title, {color: colors.text}]}>
        {strings.profile.MobileNumber} : {user?.number}
      </Text>

      <Button title={strings.profile.logout} onPress={logoutUser} />
    </View>
  );
}
