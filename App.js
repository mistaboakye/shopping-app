import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnlineShoppingScreen from "./pages/OnlineShoppingScreen";
import AddToCartScreen from "./pages/AddToCartScreen";
import PaymentSuccessfullScreen from "./pages/PaymentSuccessfullScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="O Shopping mall" component={OnlineShoppingScreen} />
        <Stack.Screen name="Add to cart" component={AddToCartScreen} />
        <Stack.Screen
          name="Payment Successful"
          component={PaymentSuccessfullScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
