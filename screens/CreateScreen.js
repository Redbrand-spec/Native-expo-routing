import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, TextInput, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { OpenReg, OpenBold } from '../components/FONTS/fonst'
import ImageCreate from '../components/createImage'

const CreateScreen = ({ navigation }) => {
  const [ text, setText ] = useState()
  const [ image, setImage ] = useState()

  const dispatch = useDispatch()

  const Createpost = async () => {
    if(!text) {
      Alert.alert("Введите сообщение")
      return false
    }
    const date = new Date().getTime()
    const Data = {
      img: image, text: text, id: String(date), date: new Date(),  booked: false, 
    }

    dispatch({
      type: 'CREATE_LIST' ,
      list: Data
    })

    navigation.navigate('Home')
  }
  const Post = useSelector(state => state.Post.Post)

  
  return (
    <View style={styles.container}>
    <ScrollView style={styles.cont}>
      <OpenBold style={styles.text}>создание поста</OpenBold>
      <View style={styles.cont}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Введите сообщение"
        onChangeText={e => setText(e)}
        multiline
      />
      </View>
      <ImageCreate setImage={setImage} />
      <View style={styles.buttoncont}>
        <AntDesign.Button style={styles.button} name="pluscircleo" disabled={!image} onPress={() => Createpost()} >
          Создать
        </AntDesign.Button>
      </View>
    </ScrollView>
    </View>
  );
}
export default CreateScreen

CreateScreen.navigationOptions = {
  title: 'Создать пост',
  headerStyle: {
    backgroundColor: '#ff7875' ,
  },
};


///////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    paddingVertical: 30 ,
    alignItems: 'center'
  },
  text: {
    width: '100%' ,
    textAlign: 'center'
  },
  cont: {
    width: '100%' ,
  },
  input: {
    marginVertical: 30 ,
    paddingHorizontal: 20 ,
    backgroundColor: '#fcffe6' ,
    width: '100%' ,
    minHeight: 50 ,
    borderStyle: 'solid' ,
    borderTopWidth: 2 ,
    borderBottomWidth: 2 ,
    borderColor: '#ffccc7'
  },
  buttoncont: {
    width: '100%' ,
    paddingHorizontal: 70 ,
    marginVertical: 40
  },
  button: {
    display: 'flex' ,
    alignItems: 'center' ,
    justifyContent: 'center'
  }
});
