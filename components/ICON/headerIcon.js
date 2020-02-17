import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons'

const HeaderIcon = props => {
  return (
    <HeaderButton 
      {...props}
      IconComponent={Ionicons}
      iconSize={26}
    />
  )
}

export default HeaderIcon