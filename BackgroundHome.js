import React, { Component } from 'react'
import {  ImageBackground, Image,StyleSheet, View, Button, Alert, Text,TouchableOpacity } from 'react-native';

class Background extends Component {

    state = { fontLoaded: false };

    getFont = async () => {
        await Expo.Font.loadAsync({
          Cochin: require("./assets/fonts/Cochin.ttf"),
        });
        this.setState({ fontLoaded: true });
      }
      componentDidMount(){ this.getFont() }
   
   render(){
    if (this.state.fontLoaded) 
    //     return <Expo.AppLoading />;
    //   }
       
      return(   
        <View  >
            <ImageBackground  source = {require('./images/degrade2.png')} style={{width: '100%', height: '100%'}}>
                <TouchableOpacity style={styles.container} onPress={ () => { this.props.navigation.push('NowPlaying') } }>                         
                < ImageBackground source = {require('./images/logo.png')} style={{width: 50, height: 50,marginBottom:10}} />
                <Text style={{color:"white",textAlign: "center",fontWeight: 'bold',fontFamily: 'Cochin',fontSize: 30,}}>COOKIEMOVIE</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
      )
      else{
        return(
        <Text>Loading</Text>
        )
      }
   }
}

export default Background

const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     textAlign : 'center',

   },
 });