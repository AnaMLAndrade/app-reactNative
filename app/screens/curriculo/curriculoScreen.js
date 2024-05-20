import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CurriculoScreen = () => {
  const Linkedin = () => {
    window.location.href = "https://www.linkedin.com/in/anamaria-andrade/";
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          I'm an undergraduate student in Software Development and Systems
          Analysis at Senac College and a Data Management Intern at CESAR where
          I'm able to experience database administration and data governance
          routines. Internship experience in Oracle Database, SQLServer,
          PostgreSQL, MongoDB, MariaDB and Ubuntu.
          <br></br>
          <br></br>
          I'm also a software development resident by the OnBoard Program at
          Porto Digital, the largest urban technology park in Brazil, where I
          develop software solutions for partner companies.
        </Text>
      </View>

      <TouchableOpacity onPress={Linkedin} style={styles.button}>
        <Text style={styles.text}>Click to see my Linkedin</Text>
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

  textContainer: {
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    marginVertical: 5,
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

export default CurriculoScreen;
