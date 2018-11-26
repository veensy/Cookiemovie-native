import React, { Component } from 'react';
import { ScrollView,Platform, ImageBackground, Image, StyleSheet, View, Button, Alert, Text, TouchableOpacity } from 'react-native';




class GenreView extends Component {


    render() {

        return (
            <Text style={{ color: "white", fontWeight: 'bold', fontSize: 15, fontFamily: 'Cochin', marginBottom: 10, justifyContent: 'flex-start' }}>
                {this.props.genres}{", "}
            </Text>
        );
    }
}
export default GenreView;
