import React, { Component } from 'react'
import { WebView, TextInput, ScrollView, Platform, ImageBackground, Image, StyleSheet, View, Button, Alert, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements'
import SearchView from './SearchView'

class Search extends Component {

    state = {
        query: '',
        results: []
    }

    getInfo = async () => {
        const api_key = "f43e81e7b5860bfeb6d036dd3dd602e1"
        const recup_data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${this.state.query}&page=1&include_adult=false&language=fr`)
        const api_data = await recup_data.json()
        this.setState({
            results: api_data.results
        })
    }

    handleInputChange = (text) => {
        this.setState({
            query: text
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text>Recherche</Text>

                <SearchBar
                    searchIcon={{ size: 24 }}
                    onChangeText={this.handleInputChange}
                    placeholder='Recherche...' />

                {this.state.results.map((element, id) =>
                    <SearchView
                        key={id}
                        title={element.title}
                        image={element.poster_path}
                        id={element.id} 
                        navigation = {this.props.navigation}/>
                )}


            </ScrollView>
        )
    }
}
export default Search

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: 'black',
        marginTop: 24,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                marginTop: 35,
            }
        }),
    },
});