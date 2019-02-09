import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "今日めっちゃ雨やって！",
        subtitle: "傘ちゃんと持って行ってきや！😎",
        icon: "weather-rainy"
    },
    
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "今日めっちゃいい天気！",
        subtitle: "お仕事気をつけて行ってきーや！😊",
        icon: "weather-sunny"
    },
    
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "今日雷だって！",
        subtitle: "お外でんとこうな！危ないし、な！😠",
        icon: "weather-lightning"
    }, 
    
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "今日曇ってるんだって！",
        subtitle: "雨降るかもしれないな！🤔",
        icon: "weather-cloudy"
    },
    
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "今日雪やって！！！",
        subtitle: "外見てみよ！積ってるかなー😚",
        icon: "weather-snowy"
    },

    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "今日雨かもやって！",
        subtitle: "傘入れといたし、忘れず使ってや！😘",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "今日雨かもやって！",
        subtitle: "傘入れといたし、忘れず使ってや！😘",
        icon: "weather-hail"
    },

    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "今日霧がやばいって！",
        subtitle: "スマホ見ずにちゃんと前みような！😆",
        icon: "weather-fog"
    }
}

function Weather({ weatherName, temp }) {
    console.log(weatherName)
    return (
        <LinearGradient 
        colors={weatherCases[weatherName].colors}
        style={styles.container}
        >
        <View style={styles.upper}>
             <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
            <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
        </View>
       </LinearGradient>
        );
    }

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};


export default Weather;


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
        fontSize: 35,
        color: "white",
        backgroundColor: "transparent",
        marginBottom: 20,
        fontWeight: "300"
    },
    subtitle: {
       fontSize: 25,
       color: "white",
       backgroundColor: "transparent",
       marginBottom: 80
    }

});