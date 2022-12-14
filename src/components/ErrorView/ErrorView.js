import PropTypes from 'prop-types';
import React from 'react';
import {  Text, View } from 'react-native';
import { styles } from "./Style";
import { typography } from '../../theme';



const ErrorView = ({ }) => {
    const { colors } = useTheme();

  if (errors.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {errors.map((error) => (
        <Text key={error} style={[typography.error, { color: colors.error }]}>
          {error}
        </Text>
      ))}
    </View>
  );
}

ErrorView.propTypes = {
  errors: PropTypes.array.isRequired,
};


export default Button;
