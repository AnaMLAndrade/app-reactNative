import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToCurriculoPage = () => {
    navigation.navigate("Curriculo");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/foto.jpeg")} />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Ana Andrade</Text>
        <Text style={styles.text}>21 years old</Text>
        <Text style={styles.text}>DBA Intern</Text>
        <Text style={styles.text}>8 months</Text>
      </View>

      <TouchableOpacity onPress={goToCurriculoPage} style={styles.button}>
        <Text style={styles.text}>About me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },

  textContainer: {
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    marginVertical: 2,
    color: "white",
  },

  button: {
    marginTop: 20,
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
