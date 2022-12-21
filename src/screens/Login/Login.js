import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {login, TYPES} from '../../actions/UserActions';
import {Button, } from '../../components';

import {strings} from '../../localization';
import {styles} from './Login.styles';
import {isLoadingSelector} from '../../selectors/StatusSelectors';
import {shadow ,typography} from '../../theme';
import DateTimePicker from '@react-native-community/datetimepicker';
import ChangeLanguage from '@/components/ChangeLanguage';

const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const numberRegex = /^\d{10}$/;


export function Login() {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const [number, setNumber] = useState('');
  const [errorNumber, setErrorNumber] = useState('');

  const showDatePicker = () => {
    setDatePicker(true);
  };

  const onDateSelected = (event, value) => {
    setDate(value);
    setDatePicker(false);
  };


  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state),
  );

  const handleSubmit = () => {

    dispatch(login(username, date.toDateString(),number));
  };

  const validateEmail = () => {
    if (!emailRegex.test(username)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  };

  const validateNumber = () => {
    if (!numberRegex.test(number)) {
      setErrorNumber('Please enter 10 digit to make it valid ');
    } else {
      setErrorNumber('');
    }
  };


  return (
    <View style={styles.container}>
    <ChangeLanguage />
    <View style={styles.container}>
    <Text style={typography.title}> {strings.login.createaccount}</Text>

<View
  style={[
    styles.formContainer,
    shadow.primary,
    {backgroundColor: colors.primary},
  ]}>

  

  <TextInput
    value={username}
    onBlur={validateEmail}
    placeholder={strings.login.usernameHint}
    onChangeText={text => setUsername(text)}
  />
  {error ? <Text style={{color: colors.error}}>{error}</Text> : null}



  <TextInput
    value={number}
    onBlur={validateNumber}
    placeholder={strings.login.moblie}
    keyboardType="number-pad"
    onChangeText={text => setNumber(text)}

  />
  {errorNumber ? <Text style={{color:colors.error}}>{errorNumber}</Text> : null}

  {datePicker && (
    <DateTimePicker
      value={date}
      mode={'date'}
      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
      is24Hour={true}
      onChange={onDateSelected}
      style={styles.datePicker}
    />
  )}

  {!datePicker && (
    <View style={{margin: 10}}>
      <Button
        title={strings.login.pickdate}
        color="green"
        onPress={() => showDatePicker()}
      />
    </View>
  )}

  <Text style={styles.text}>
    {strings.login.bithDate} {date.toDateString()}{' '}
  </Text>

  <Button
    onPress={handleSubmit}
    style={styles.submitButton}
    title={isLoading ? strings.common.loading : strings.login.button}
  />
</View>
</View>
    </View>
  
  );
}
