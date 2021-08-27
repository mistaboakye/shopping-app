import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ButtonNext from "../components/ButtonNext";
import TextInfo from "../components/TextInfo";

export default function PaymentSuccessfullScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>PAYMENT SUCCESSFUL</Text>
      <TextInfo />

      <Image source={require("../assets/confirm.png")} style={styles.image} />
      {/* <ButtonNext /> */}
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer1}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Add to cart");
          }}
        >
          <Text style={styles.footerText}>Previous</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.slide1}></Text>
          <Text style={styles.slide}></Text>
          <Text style={styles.slide}></Text>
        </View>

        <Text style={styles.footerText}></Text>
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
});
