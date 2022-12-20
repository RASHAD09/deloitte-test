import { useTheme } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../selectors/UserSelectors';

import SearchBar from '../../components/SearchBar';


export function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);




  return (
    
    <SearchBar />

  );
}
