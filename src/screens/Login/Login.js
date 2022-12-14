import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button';
import { ErrorView } from '../../components/ErrorView';
import {  TextField } from '../../components/TextField';


import { styles } from './Login.styles';
// import { errorsSelector } from '@/selectors/ErrorSelectors';
// import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { shadow } from '../../theme';

 export default function Login () {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={[styles.formContainer, shadow.primary, { backgroundColor: colors.primary }]}>
        <TextField
          autoCapitalize="none"
          accessibilityHint={''}
          accessibilityLabel={'test'}
          onChangeText={setUsername}
          placeholder={''}
          value={username}
        />
        <TextField
          secureTextEntry
          accessibilityHint={''}
          accessibilityLabel={'test'}
          autoCapitalize="none"
          onChangeText={setPassword}
          // placeholder={strings.login.password}
          placeholder={''}
          textContentType="password"
          value={password}
        />
        <ErrorView errors={errors} />
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          // title={isLoading ? strings.common.loading : strings.login.button}
          title={'test'}
        />
      </View>
    </View>
  );
}


// export default Login;