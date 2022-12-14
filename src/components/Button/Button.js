import React from 'react';
import { PropTypes } from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { styles } from "./Style";
import { typography } from '../../theme';

const Button = ({ style, textStyle, title, ...rest }) => {
  return (
    <>
     <TouchableOpacity style={[styles.button, { borderColor: colors.border }, style]} {...rest}>
      <Text style={[{ color: colors.text }, typography.label, textStyle]}>{title}</Text>
    </TouchableOpacity>
    </>
  )
};
 
Button.propTypes = {
    style: PropTypes.object,
    textStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
  };
  
  Button.defaultProps = {
    style: null,
    textStyle: null,
  };


export default Button;