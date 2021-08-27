import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ButtonNext from "../components/ButtonNext";
import TextInfo from "../components/TextInfo";

export default function AddToCartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>ADD TO CART</Text>
      <TextInfo />

      <Image source={require("../assets/addtocart.png")} style={styles.image} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Payment Successful");
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer1}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("O Shopping mall");
          }}
        >
          <Text style={styles.footerText}>Previous</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.slide}></Text>
          <Text style={styles.slide1}></Text>
          <Text style={styles.slide}></Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Payment Successful");
          }}
        >
          <Text style={styles.footerText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
  },
  textHeading: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  footerContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  footerContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  footerText: {
    color: "#767b82",
    fontSize: 15,
  },

  buttonContainer: {
    height: 60,
    backgroundColor: "#5a33cc",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 70,
    borderRadius: 40,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    alignSelf: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
  slide1: {
    width: 20,
    height: 10,
    backgroundColor: "#5a33cc",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  slide: {
    width: 10,
    height: 10,
    backgroundColor: "#e0dce3",
    marginHorizontal: 5,
    borderRadius: 10,
  },
});
