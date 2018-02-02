<<<<<<< HEAD
import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo"

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Text> Icon here!</Text>
          <Text> Temp here!</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}> Raining like a MF </Text>
          <Text style={styles.subtitle}> For more info look outside</Text>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lower: {},
  title: {},
  subtitle: {}
})
=======
import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo"

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Text> Icon here!</Text>
          <Text> Temp here!</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}> Raining like a MF </Text>
          <Text style={styles.subtitle}> For more info look outside</Text>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lower: {},
  title: {},
  subtitle: {}
})
>>>>>>> c272f29199cd4f1b9cce74c07d3a111c10e65bbc
