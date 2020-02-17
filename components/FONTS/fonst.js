import React from 'react';
import { Text } from 'react-native';

export function OpenReg(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'open-sans-regular' }]} />
  );
}

export function OpenBold(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'open-sans-bold' }]} />
  );
}
