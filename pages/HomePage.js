import React from "react";
import { View, Text, Button } from "react-native";
import globalStyles from "../style/Style";
import SquareButton from "../components/SquareButton";

const HomePage = ({ navigation, route }) => {
  return (
    <View>
      <Text style={globalStyles.cta_title}>Choose your screen to go</Text>

      <SquareButton
        title="Ottawa"
        image={
          "https://images.unsplash.com/photo-1578870282712-f3d3aabca064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2867&q=80"
        }
        destinationPage={"Second"}
        navigation={navigation}
        route={route}
      ></SquareButton>

      <Button
        title="Go to Second Screen"
        style={[globalStyles.button]}
        onPress={() => {
          navigation.navigate("Second");
        }}
      ></Button>
      <Button
        title="Go to Third Screen"
        style={[globalStyles.button]}
        onPress={() => {
          navigation.navigate("Third");
        }}
      ></Button>
    </View>
  );
};

export default HomePage;
