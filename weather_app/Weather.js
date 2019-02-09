import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";

export default class Weather extends Component {
    render() {
        return (
        <LinearGradient 
        colors={["#00C6FB", "#005BEA"]} 
        style={styles.container}
        >
        <View style={styles.upper}>
             <Ionicons color="white" size={144} name="ios-rainy" />
            <Text style={styles.temp}>7 °</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}>今日雨だって！</Text>
            <Text style={styles.subtitle}>傘入れとくし、使ってや！😊</Text>
        </View>
       </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent"
    },
    lower: {
      flex:1,
      alignItems: "flex-start",
      justifyContent: "flex-end",
      alignItems: 'center'
    },
    temp: {
        fontSize: 40,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
      },
    title: {
        fontSize: 40,
        color: "white",
        backgroundColor: "transparent",
        marginBottom: 20,
        fontWeight: "300"
    },
    subtitle: {
       fontSize: 28,
       color: "white",
       backgroundColor: "transparent",
       marginBottom: 80
    }

});