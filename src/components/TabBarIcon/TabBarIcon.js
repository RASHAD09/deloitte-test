import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { homeIcon, settingsIcon } from '../../assets/images';
import { TABS } from '../../constants/navigation';

const tabIcon = {
    [TABS.home]: homeIcon,
    [TABS.profile]: settingsIcon,
  };
  

const TabBarIcon = ({ style, textStyle, title, ...rest }) => {

  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon[routeName]}
      style={{ tintColor: color }}
    />
  );
}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};

export default TabBarIcon;

