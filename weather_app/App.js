import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';



export default class App extends Component {
  state = {
    isLoaded: false
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
       {isLoaded ? null : (
         <View style={styles.loading}>
        <Text style={styles.loadingText}>
        今日の天気はー？
        </Text> 
        </View>
       )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex:1,
    backgroundColor: '#3abce6',
    justifyContent: "flex-end",
    alignItems: 'center',

  },
  loadingText: {
    fontSize: 28,
    marginBottom: 100
  }
});



