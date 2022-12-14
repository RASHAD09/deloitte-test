import { StyleSheet } from 'react-native';
import { spacing } from '../../theme';

const styles = StyleSheet.create({

    container: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: spacing.xs,
        paddingTop: spacing.m,
        marginBottom: spacing.s,
      },
      input: {
        paddingHorizontal: spacing.xs,
      },
      label: {
        color: 'gray',
        position: 'absolute',
        top: 0,
        left: spacing.xs,
      },
   
});

export { styles }