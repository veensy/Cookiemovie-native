import React, { Component } from "react";
import {
    WebView,
    ScrollView,
    Platform,
    ImageBackground,
    Image,
    StyleSheet,
    View,
    Button,
    Alert,
    Text,
    TouchableOpacity
} from "react-native";
import GenreView from "./GenreView";
import Acteurs from './Acteurs'

export default class DetailsView extends Component {
    convertHours = min => {
        const h = Math.trunc(min / 60);
        const m = Math.ceil((min / 60 - h) * 60);
        if (m > 9) return h + "h" + m;
        return h + "h0" + m;
    };

    render() {
        const image_key = "https://image.tmdb.org/t/p/w500";
        const poster = this.props.image ? {uri: `${image_key}${this.props.image}`} : require('./images/afficheNull.png')

        const time = this.convertHours(`${this.props.temps}`);
        const moinsPoint = time.split(".").join("h");
        const timeExeption = this.props.temps ? moinsPoint : 'Durée indisponible'

        const dateFrance = `${this.props.date}`;
        const annee = dateFrance[0] + dateFrance[1] + dateFrance[2] + dateFrance[3];
        const mois = dateFrance[5] + dateFrance[6];
        const jour = dateFrance[8] + dateFrance[9];
        const month = [
            "Janv",
            "Fev",
            "Mars",
            "Avr",
            "Mai",
            "Juin",
            "Juil",
            "Aout",
            "Sept",
            "Oct",
            "Nov",
            "Dec"
        ];
        const leBonMois = month[mois - 1];
        const newDate = `${jour} ${leBonMois} ${annee}`
        const newDateExeption = this.props.date  ? newDate : 'Date indisponible'

        const reaExeption = this.props.realisateur ? this.props.realisateur : 'Indisponible'

        return (
            <ScrollView style={styles.container}>
                <Text
                    style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 15,
                        fontFamily: "Cochin",
                        marginBottom: 10,
                        marginTop: 20
                    }}
                >
                    {this.props.title}
                </Text>

                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 20
                    }}
                >
                    <Image style={{ width: 200, height: 280 }} source={ poster } />
                </View>

                <Text
                    style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 15,
                        fontFamily: "Cochin",
                        marginBottom: 30
                    }}
                >
                    {this.props.description}
                </Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 15,
                            fontFamily: "Cochin",
                            marginBottom: 10
                        }}
                    >
                        Realisateur : {reaExeption}
                    </Text>
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 15,
                            fontFamily: "Cochin",
                            marginBottom: 10
                        }}
                    >
                        Durée : {timeExeption}
                    </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text
                        style={{
                            justifyContent: "flex-start",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 15,
                            fontFamily: "Cochin",
                            marginBottom: 10
                        }}
                    >
                        Date de sortie : {newDateExeption}
                    </Text>
                </View>

                <View style={{ flexDirection: "row" ,justifyContent:'flex-start'}}>
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 15,
                            fontFamily: "Cochin",
                            marginBottom: 10,
                        }}
                    >
                        Genre :{" "}
                    </Text>

                    {this.props.genres.map((elem, index) => (
                        <GenreView key={index} genres={elem.name} />
                    ))}
                </View>
                    
                <View style={{ flexDirection: "row", flexWrap: 'wrap' }}>
                <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 15,
                            fontFamily: "Cochin",
                            marginBottom: 10
                         }}
                    >
                        Acteurs :{" "}
                    </Text>

                {this.props.acteurs.slice(0,6).map((element, index) =>(
                            <Acteurs key={index} acteurs={element.name} />
                        ))}

                </View>
                

                <WebView
                    style={styles.youtube}
                    source={{
                        uri: `https://www.youtube.com/embed/${
                            this.props.youtubeKey
                            }?rel=0&autoplay=0&showinfo=0&controls=0`
                    }}
                    javaScriptEnabled={true}
                />

             
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "black"
    },
    youtube: {
        width: "100%",
        height: 200
    }
});
