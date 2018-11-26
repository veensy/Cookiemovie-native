import React, { Component } from 'react';
import { createStackNavigator,createAppContainer,createBottomTabNavigator, BottomTabBar } from 'react-navigation'
import BackgroundHome from './BackgroundHome'
import NowPlaying from './NowPlaying'
import Upcoming from './Upcoming'
import UpcomingView from './UpcomingView'
import Details from './Details'
import DetailsView from './DetailsView'
import NowPlayingView from './NowPlayingView'
import Search from './Search' 
import SearchView from './SearchView'
import  Icon_1  from 'react-native-vector-icons/MaterialCommunityIcons'
import  Icon_2  from 'react-native-vector-icons/MaterialIcons'
import  Icon_3  from 'react-native-vector-icons/EvilIcons'






const Nav = createStackNavigator({

    NowPlaying : { 
        screen : NowPlaying,
        navigationOptions: ({navigation}) => ({
            header: null,
        }) 
      },
    NowPlayingView :{
        screen : NowPlayingView,
          navigationOptions: ({navigation}) => ({
              header: null,
        })
      },
    Details : {
        screen : Details,
          navigationOptions: ({navigation}) => ({
            header: null,
        }) 
      }, 
    DetailsView :  {
        screen : DetailsView,
          navigationOptions: ({navigation}) => ({
            header: null,
        })
    } 
})

const Upcome = createStackNavigator({
    Upcoming : { 
        screen : Upcoming,
        navigationOptions: ({navigation}) => ({
            header: null,
            
        }) 
      },
      UpcomingView : { 
        screen : UpcomingView,
        navigationOptions: ({navigation}) => ({
            header: null,
            
        }) 
      },
      Details : {
        screen : Details,
          navigationOptions: ({navigation}) => ({
            header: null,
        }) 
      }, 
    DetailsView :  {
        screen : DetailsView,
          navigationOptions: ({navigation}) => ({
            header: null,
        })
    } 
})

const Find = createStackNavigator({
    Search :{
        screen : Search,
        navigationOptions: ({navigation}) => ({
            header: null,
        })   
    },
    SearchView :{
        screen : SearchView,
        navigationOptions: ({navigation}) => ({
            header: null,
        })   
    },
    Details : {
        screen : Details,
          navigationOptions: ({navigation}) => ({
            header: null,
        }) 
      }, 
    DetailsView :  {
        screen : DetailsView,
          navigationOptions: ({navigation}) => ({
            header: null,
        })
    } 
})

Nav.navigationOptions = {tabBarLabel: 'En Salle',tabBarIcon : ({ tintColor }) => <Icon_1 name ="theater" size={35}/>, tabBarOptions: {
    style: {
      height: 55
    }
  } }
Upcome.navigationOptions = {tabBarLabel: 'Prochainement',tabBarIcon : ({ tintColor }) => <Icon_2 name ="movie-filter" size={35}/> ,tabBarOptions: {
    style: {
      height: 55
    }
  } }

Find.navigationOptions ={tabBarLabel: 'Search',tabBarIcon : ({ tintColor }) => <Icon_3 name ="search" size={35}/>,tabBarOptions: {
    style: {
      height: 55
    }
  } }

export default createAppContainer(createBottomTabNavigator({Nav,Upcome,Find}))

  

