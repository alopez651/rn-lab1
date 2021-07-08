import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={require("./assets/bit.jpg")} style={styles.photo} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameAndPronouns}>Ana Lopez (She/Her)</Text>
      </View>
      <View style={styles.blurbContainer}>
      <Text style={styles.blurb}>My Info </Text>
        <TouchableOpacity onPress = {() => alert("linkedin.com/in/ana-lopez-38573a20a                                github.com/alopez651")}
         style = {styles.button}>
           <Text style={styles.buttonText}>Click</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 80,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "azure",
    fontFamily: "Courier New",
  },
  blurbContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "azure",
    fontFamily: "Courier New",
  },
  photo: {
    resizeMode: "contain",
    width: "90%",
    padding: 100,
  },
  nameAndPronouns: {
    color: 'black',
    fontSize: 30,
    fontFamily: "Courier New",
  },
  blurb: {
    fontSize: 20,
    fontFamily: "Courier New",
  },
  button: {
    backgroundColor: "yellow",
    padding: 20,
    borderRadius: 5,
    backgroundColor: "white"
  },
  buttonText: {
    fontSize: 20,
    color: "black",
    backgroundColor: "azure",
    fontFamily: "Courier New",
  },
});
