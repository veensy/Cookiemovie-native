import React, { Component } from 'react'
import { Platform, ImageBackground, FlatList,ScrollView,StyleSheet, View, Button, Alert, Text,TouchableOpacity } from 'react-native';
import UpcomingView from './UpcomingView'

export default class Upcoming extends Component {
    state = { results : [] , 
              fontLoaded: false 
            }

    getUpcoming = async () => {

      const api_key = "api_key=634dd449d69159e1d015a2f0febaaf61"
      const recup_data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?${api_key}&language=en-FR&page=1&region=FR&language=fr`)
      const api_data = await recup_data.json()
      this.setState({ results : api_data.results }) 
    }

    getFont = async () => {
      await Expo.Font.loadAsync({
        Cochin: require("./assets/fonts/Cochin.ttf"),
      });
      this.setState({ fontLoaded: true });
    }

    componentDidMount(){ this.getUpcoming(), this.getFont() }
    
    render() {
      if (this.state.fontLoaded) 
      return (
  
        <ScrollView contentContainerStyle={styles.contentContainer}>
       {this.state.results.map((element, index) => 
                    <UpcomingView
                        key = {index}
                        title = {element.title} 
                        id = {element.id}
                        image = {element.poster_path}
                        navigation = {this.props.navigation}
                        />)}
        </ScrollView>
  
      )
      else{
        return(
        <Text>Loading</Text>
        )
      }
    }
}

const styles = StyleSheet.create({
  contentContainer: {
      alignItems: 'center',
      backgroundColor:'black',
      marginTop: 24,
      ...Platform.select({
        ios: {
          marginTop: 35,
        }}),
    },
  });
