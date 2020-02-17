import React, { useState } from 'react';

import { ImageBackground, StyleSheet, View } from 'react-native';

import { OpenReg, OpenBold } from '../components/FONTS/fonst'
import DateVal from '../UI/date'

const ImageCont = ( props ) => {

const { img, date } = props
  return(
    <ImageBackground style={styles.container} source={{ uri: img }} >
      <View style={styles.textcont}>
        <OpenBold style={styles.text} ><DateVal val={date} /></OpenBold>
      </View>
    </ImageBackground>
  )
}
export default ImageCont

const styles = StyleSheet.create({
  container: {
    height: '95%' ,
    width: '100%' ,
  },
  textcont: {
    width: '100%' ,
    height: 30 ,
    backgroundColor: 'rgba(0, 0, 0, 0.5)' ,
    display: 'flex' ,
    alignItems: 'center' ,
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});