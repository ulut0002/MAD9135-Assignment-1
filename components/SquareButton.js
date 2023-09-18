import React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import Style from "../style/Style";
import QuestionMark from "./QuestionMark";

const SquareButton = ({ title, image, destinationPage, data, navigation }) => {
  const imageComponent = image ? (
    <Image source={{ uri: image }} style={[styles.image]} />
  ) : (
    <QuestionMark style={styles.image} />
  );

  return (
    <Pressable
      style={[styles.button]}
      onPress={() => {
        if (destinationPage && navigation && navigation.navigate) {
          navigation.navigate(destinationPage, { data });
        }
      }}
    >
      <View style={[styles.image]}>{imageComponent}</View>
      <View style={[styles.textContainer]}>
        <Text style={[styles.text]}>{title || ""}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 2,
  },

  image: {
    flex: 1,
    width: "100%",
    height: "auto",
    aspectRatio: 1,
  },

  textContainer: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 6,
  },

  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 5,
  },
});

export default SquareButton;
