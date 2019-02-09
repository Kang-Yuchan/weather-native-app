import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
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
        this.setState({
          isLoaded: true,
          error: "ね、、眠い、、鍵よろしく、、バタッ"
        });
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
      `${WEATHER_API}lat=${coords.lat}&lon=${
        coords.lng
      }&appid=${API_KEY}&units=metric`
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
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />
       {isLoaded ? (
       <Weather /> 
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
    fontSize: 40,
    color: "white",
    backgroundColor: "transparent",
    marginBottom: 20,
    fontWeight: "300"
},
  loadingLwText: {
    fontSize: 28,
    color: "white",
    backgroundColor: "transparent",
    marginBottom: 80
 }
});



