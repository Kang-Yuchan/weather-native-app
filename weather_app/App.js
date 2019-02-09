import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "c722e116e8ca363e62347f08ddc79d3c";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

export default class App extends Component {
  state = {
    isLoaded: false,
    error:null,
    temperature:null,
    name:null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this.__getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error:error
        })
      }
      );
  };

  __getWeather = (lat, long) => {
    fetch(
      `${WEATHER_API}lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    )
    .then(response => response.json())
    .then(json => {
      this.setState({
       temperature: json.main.temp,
       name: json.weather[0].main,
       isLoaded: true
    });
  });
  };
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />
       {isLoaded ? (
       <Weather weatherName={name} temp={Math.floor(temperature)} /> 
       ): (
         <View style={styles.loading}>
        <Text style={styles.loadingUpText}>ちゃなー😮！</Text> 
        <Text style={styles.loadingLwText}>今日の天気教えてあげるし、ちょっと待ってな！</Text> 
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
       )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3db8e9"
  },
  errorText: {
      fontSize: 35,
      color: "red",
      backgroundColor:"transparent",
      marginBottom: 100
  },
  loading: {
    flex:1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  loadingUpText: {
    fontSize: 35,
    color: "white",
    backgroundColor: "transparent",
    marginBottom: 20,
    fontWeight: "300"
},
  loadingLwText: {
    fontSize: 25,
    color: "white",
    backgroundColor: "transparent",
    marginBottom: 80
 }
});



