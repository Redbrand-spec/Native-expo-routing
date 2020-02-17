import React from 'react';
import { Text } from 'react-native';

const DateVal = (props) => {
  const date =  Number(props.val)
  let Day = null
  let Month = null
  let Hours = null
  let Minutes = null
  // день
  if(new Date(date).getDate() < 10) {
    Day = "0" + String(new Date(date).getDate())
  } else {
    Day = String(new Date(date).getDate())
  }
  //месяц
  if(new Date(date).getMonth() + 1 < 10) {
    Month = "0" + String(new Date(date).getMonth() + 1)
  } else {
    Month = String(new Date(date).getMonth() + 1)
  }

  if(new Date(date).getHours() < 10) {
    Hours = "0" + String(new Date(date).getHours())
  } else {
    Hours = String(new Date(date).getHours())
  }

  if(new Date(date).getMinutes() < 10) {
    Minutes = "0" + String(new Date(date).getMinutes())
  } else {
    Minutes = String(new Date(date).getMinutes())
  }
  return (
  <Text>{Day}.{Month}.{new Date(date).getFullYear()} | {Hours}.{Minutes} </Text>
  )
}

export default DateVal