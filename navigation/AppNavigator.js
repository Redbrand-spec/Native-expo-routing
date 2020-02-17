import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Platform } from 'react-native';

import Home from '../screens/HomeScreen'
import Create from '../screens/CreateScreen'
import Full from '../screens/FullScreen'
import Booked from '../screens/BookedScreen'

import TabBarIcon from '../components/ICON/TabBarIcon'
import DrawerIcon from '../components/ICON/DrawerIcon'

const PostNav = createStackNavigator(
  {
    Home : Home ,
    Create: Create ,
    Full: Full
  },
  {
    headerMode: 'screen' ,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#73d13d' ,
      },
      headerTitleStyle: {
        color: '#595959'
      },
    }
  }
)

const BookNav = createStackNavigator(
  {
    Booked: Booked ,
    Create: Create ,
    Full: Full
  },
  {
    headerMode: 'screen' ,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#73d13d' ,
      },
      headerTitleStyle: {
        color: '#595959'
      },
    }
  }
)
/// нижнее меню
const BottomNav = createMaterialBottomTabNavigator(
{
  Post: {
    screen: PostNav ,
    navigationOptions: {
      shifting: true,
      barStyle: {
        backgroundColor: '#73d13d'
      },
      activeColor: '#1d39c4' ,
      tabBarLabel: 'Главная',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={ Platform.OS === 'ios'? `ios-home` : 'md-home' } />
      ),
    }
  },
  Booked: {
    screen: BookNav ,
    navigationOptions: {
      shifting: true,
      barStyle: {
        backgroundColor: '#69c0ff'
      },
      activeColor: '#1d39c4' ,
      tabBarLabel: 'Избранное',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'} />
      ),
    }
  },
}
)

const MainNavigator = createDrawerNavigator({
  BottomNav: {
    screen: BottomNav ,
    navigationOptions: {
      drawerLabel: 'На главную' ,
      drawerIcon: <DrawerIcon name={ Platform.OS === 'ios'? `ios-home` : 'md-home' } />
    }
  },
  Create: {
    screen: Create ,
    navigationOptions: {
      drawerIcon: <DrawerIcon name={ Platform.OS === 'ios'? `ios-create` : 'md-create' } />
    }
  } ,
  Booked: {
    screen: Booked ,
    navigationOptions: {
      drawerIcon: <DrawerIcon name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'} />
    } 
  }
})

export default createAppContainer(
  MainNavigator
)
