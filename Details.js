import React, { Component } from 'react'
import { WebView, ScrollView, Platform, ImageBackground, Image, StyleSheet, View, Button, Alert, Text, TouchableOpacity } from 'react-native';
import DetailsView from './DetailsView'




export default class Details extends Component {

    state = {
        title: undefined,
        image: undefined,
        description: undefined,
        realisateur: undefined,
        temps: undefined,
        genres: [],
        acteurs: [],
        date: undefined,
        result: [],
        youtubeKey: 0
    }

    getDetails = async () => {
        const movieId = this.props.navigation.state.params.query
        const api_key = "634dd449d69159e1d015a2f0febaaf61"
        const recup_data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=fr-FR`)
        const api_data = await recup_data.json();
        this.setState({
            title: api_data.title,
            image: api_data.poster_path,
            description: api_data.overview,
            idMovie: api_data.id,
            temps: api_data.runtime,
            genres: api_data.genres
        })
    }

    getCrew = async () => {
        const movieId = this.props.navigation.state.params.query
        const api_key = "634dd449d69159e1d015a2f0febaaf61"
        const recup_crew = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`)
        const api_bis = await recup_crew.json();
        this.setState({
            realisateur: api_bis.crew[0].name,
            acteurs: api_bis.cast
        })
    }

    getLaDate = async () => {
        const movieId = this.props.navigation.state.params.query
        const api_key = "634dd449d69159e1d015a2f0febaaf61"
        const recup_date = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${api_key}`)
        const api_date = await recup_date.json();
        const map_data = await api_date.results.filter(element => {
            if (element.iso_3166_1 === "FR") {
                return element.release_dates[0].release_date
            }
        })
        const release = map_data[0].release_dates[0].release_date

        this.setState({
            date: release
        })
    }

    getKeyForYoutube = async () => {
        const movieId = this.props.navigation.state.params.query
        const api_key = "634dd449d69159e1d015a2f0febaaf61"
        const recup_data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-FR`)
        const api_data = await recup_data.json()

        this.setState({
            youtubeKey: api_data.results[0].key
        })
    }


    componentDidMount = async () => {
        await this.getDetails();
        await this.getKeyForYoutube();
        await this.getCrew();
        await this.getLaDate();
    }


    render() {

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>

                <DetailsView
                    imageFond={this.state.imageFond}
                    title={this.state.title}
                    image={this.state.image}
                    description={this.state.description}
                    realisateur={this.state.realisateur}
                    temps={this.state.temps}
                    date={this.state.date}
                    genres={this.state.genres}
                    acteurs={this.state.acteurs}
                    youtubeKey={this.state.youtubeKey} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: 'black',
        marginTop: 24,
        ...Platform.select({
            ios: {
                marginTop: 35,
            }
        }),
    },
});