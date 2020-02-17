import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

import ImageCont from '../components/image'
import { OpenReg } from '../components/FONTS/fonst'

import { useDispatch } from 'react-redux'

const FullScreen = (props) => {
  const [ list, setList ] = useState( props.navigation.state.params )
  const dispatch = useDispatch()

  // добавление в избраного
  const AddPost = ( val ) => {
    const Data = { ...list }
    dispatch({
      type: 'ADD_LIST_BOOKED' ,
      id: val.id
    })
    Data.booked = true
    setList(Data)
  }
  // удаление из избраного
  const DeletePost = ( val ) => {
    const Data = { ...list }
    dispatch({
      type: 'DELETE_LIST_BOOKED' ,
      id: val.id
    })
    Data.booked = false
    setList(Data)
  }
  // удаление поста
  const DeleteList = () => {
    dispatch({
      type: 'DELETE_LIST' ,
      id: list.id
    })
    props.navigation.navigate('Home')
    Alert.alert('Пост удален')
    
  }


  let ButtonList = null
  if(list.booked === true) {
    ButtonList = <Button color="#f194ff" title="Удалить из избраного" onPress={() => DeletePost(list)}/>
  } else {
    ButtonList = <Button color="#f194ff" title="Добавить в избраное" onPress={() => AddPost(list)}/>
  }

  return (
    <View style={styles.container}>
      <View style={styles.contimg} >
        <ImageCont  img={list.img} date={list.date}/>
      </View>
      <OpenReg style={styles.text} >{list.text}</OpenReg>
      <View>
        <Button title="удалить" onPress={() => DeleteList() }/>
      </View>
      <View style={styles.button}>
        { ButtonList }
      </View>
    </View>
  );
}
export default FullScreen

FullScreen.navigationOptions = {
  title: 'Полный пост',
  headerStyle: {
    backgroundColor: '#69c0ff' ,
  },
};

///////////////////////////////////
const styles = StyleSheet.create({
  container: { 
    display: 'flex' ,
    alignItems: 'center' ,
    width: '100%' ,
    height: '100%' ,
    position: 'relative'
  },
  contimg: {
    width: '100%' ,
    height: 220 ,
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 20
  },
  button: {
    position: 'absolute',
    bottom: 10
  }
});
