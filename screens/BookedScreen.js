import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux'

import { OpenBold, OpenReg } from '../components/FONTS/fonst'
import ImageCont from '../components/image'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import headerIcon  from '../components/ICON/headerIcon'

const BookedScreen = ({ navigation }) => {
  const Post = useSelector(state => state.Post.Post)
  const Route = (item) => {
    navigation.navigate('Full', item )
  }

  let List = []
  
  Post.forEach(val => {
    if(val.booked === true) {
      List.push(val)
    }
  })

  const [ Image , setImage ] = useState([])

  // обновление состояния постов
  useEffect(() => {
    setImage(List)
  }, [Post])

  if(Image.length === 0) {
    return (
      <View style={styles.container}>
        <OpenBold>Избранное</OpenBold>
        <OpenReg>Нет постов в избранном</OpenReg>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <OpenBold>Избранное</OpenBold>
          <FlatList
            style={styles.containerimg}
            data={Image}
            keyExtractor={Image => Image.id.toString()}
            renderItem={({ item }) => {
            return (
              <View
                style={styles.blogcont}
                elevation={2}
              >
                <TouchableOpacity style={styles.blogcont} activeOpacity={0.7} onPress={() =>  Route(item)}>
                  <ImageCont img={item.img} date={item.date}/>
                </TouchableOpacity>
              </View>
            )
            }}
          />
    </View>
  );
}
export default BookedScreen

BookedScreen.navigationOptions = ({ navigation }) => ({
  title: 'Избранное',
  headerStyle: {
    backgroundColor: '#69c0ff' ,
  },
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={headerIcon}>
      <Item
        title='меню'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})

///////////////////////////////////
const styles = StyleSheet.create({
  container: {
    paddingTop: 30 ,
    display: 'flex' ,
    alignItems: 'center' ,
    width: '100%',
  },
  containerimg: {
    width: '100%',
    marginBottom: 25 ,
    paddingHorizontal: 10
  },
  blogcont: {
    width: "100%" ,
    height: 160 ,
    backgroundColor: '#f5f5f5' ,
    marginVertical: 10 ,
    display: 'flex' ,
    alignItems: 'center' ,
    justifyContent: 'center' ,
    
  },
});

