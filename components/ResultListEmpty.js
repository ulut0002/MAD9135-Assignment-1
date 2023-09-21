import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ResultListEmpty() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Results!</Text>
      <MaterialCommunityIcons name="pasta" size={190} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
  },

  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
