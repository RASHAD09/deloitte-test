import {StyleSheet} from 'react-native';
import {spacing} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: spacing.m,
  },
  containerInside: {
    justifyContent:'space-between',
    alignContent:'center',
    flexDirection:'row',
   
  },
  title: {
    textAlign: 'center',
  
    alignSelf:'center'
  },
});
