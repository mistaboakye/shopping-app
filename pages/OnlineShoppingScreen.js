import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ButtonNext from "../components/ButtonNext";
import TextInfo from "../components/TextInfo";

export default function OnlineShoppingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textHeading}>ONLINE SHOPPING</Text>
        <TextInfo />
      </View>

      <Image
        source={require("../assets/onlineshopping.png")}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Add to cart");
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer1}>
        <Text style={styles.footerText}> </Text>

        <View style={styles.footerContainer}>
          <Text style={styles.slide}></Text>
          <Text style={styles.slide}></Text>
          <Text style={styles.slide1}></Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Add to cart");
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
  slide: {
    width: 10,
    height: 10,
    backgroundColor: "#e0dce3",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  footerContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
