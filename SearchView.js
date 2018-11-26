import React, { Component } from 'react'
import { WebView, TextInput, ScrollView, Platform, ImageBackground, Image, StyleSheet, View, Button, Alert, Text, TouchableOpacity } from 'react-native';
import Details from './Details'
class SearchView extends Component {
    
    render() {
        const image_key = "https://image.tmdb.org/t/p/w500";
        const poster = this.props.image ? {uri: `${image_key}${this.props.image}`} : require('./images/afficheNull.png')

        return (
            <View style={styles.container}>
                <Text style={{ color: "white", fontWeight: 'bold', fontSize: 15, fontFamily: 'Cochin', marginBottom: 10, justifyContent: 'flex-start' }}>
                    {this.props.title}{" "}
                </Text>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Details', { query: this.props.id }) }}  >

                    <Image style={{ width: 200, height: 280 }} source={ poster } />
                </TouchableOpacity>
            </View>
        )
    }
}
export default SearchView

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'black',
 
    },
  });