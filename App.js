import React, { Component } from "react"
import { ActivityIndicator, AppRegistry, StyleSheet, Text, View, StatusBar } from "react-native"
import Weather from "./Weather.js"

export default class App extends Component {
  state = {
    isLoaded: false
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      this.setState({ isLoaded: true })
    })
  }

  render() {
    const { isLoaded } = this.state
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 30,
    marginBottom: 24
  }
})
