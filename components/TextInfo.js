import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TextInfo() {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et justo sit amet metus scelerisque eleifend pretium id ex. Nunc sed
          est id eros interdum euismod.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    lineHeight: 25,
    color: "#767b82",
  },
});
