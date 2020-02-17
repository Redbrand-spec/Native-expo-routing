import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CheckPremision = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA ,
      Permissions.CAMERA_ROLL
    )
    if (status !== 'granted') {
      Alert.alert('Камера заблокирована')
      return false
    }
    return true
}

const ImageCreate = (props) => {
  const [ image, setImage ] = useState()

  const SetImage = async () => {
    const status = await CheckPremision()
    if(status) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1
      });
      setImage(result.uri)
      props.setImage(result.uri)
    }
  }

  return (
    <View  style={styled.cont}>
      {
      image?
        <Image
        style={styled.image}
        source={{ uri: image }}
        />
      :
        <Image
        style={styled.image}
        source={require('../assets/images/mini/default.jpg')}
        />
      }
      <View style={styled.button}>
        <Button
          title="Вставить картинку из камеры"
          onPress={() => SetImage()}
        />
      </View>
    </View>
  );
}

export default ImageCreate

const styled = StyleSheet.create({
  cont: {
    width: '100%',
    display: 'flex' ,
    alignItems: 'center'
  },
  image: {
    width: '90%',
    height: 140 ,
    backgroundColor: '#fff1f0' ,
    marginVertical: 20
  },
  button: {
    width: '90%'
  }
})