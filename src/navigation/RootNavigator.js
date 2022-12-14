import { NavigationContainer } from '@react-navigation/native';
import React,{useState} from 'react';
import { useColorScheme ,View,Text } from 'react-native';
import { useSelector } from 'react-redux';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
// import { getUser } from '@/selectors/UserSelectors';
import { theme } from '../theme';


const RootNavigator = () => {

  // const user = useSelector(null);
  const user = useState()
  const scheme = useColorScheme();

  return (
      <>
<View>
  <Text>sss</Text>
</View>

</>    
  );
}


export default RootNavigator;


