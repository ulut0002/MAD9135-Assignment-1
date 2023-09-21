import { Button, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Style from "../style/Style";
import { useApp } from "../context/useApp";
import { useEffect } from "react";
import FilteredRecipes from "../components/FilteredRecipes";

function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const { retrieveRecipes, usersIngredients } = useApp();

  // User updates ingredient list => triggers a new fetch
  useEffect(() => {
    retrieveRecipes();
  }, [usersIngredients]);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        Style.bg,
        Style.fullscreen,
        styles.container,
      ]}
    >
      <Text style={styles.cta_title}>Want Alfredo Sauce Ideas?</Text>
      <Button
        title="Select Ingredients"
        onPress={() => {
          navigation.navigate("Ingredients");
        }}
      ></Button>
      <Button
        title="View Recipes"
        onPress={() => {
          retrieveRecipes();
        }}
      ></Button>
      <View style={styles.filteredRecipes}>
        <FilteredRecipes />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  cta_title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 20,
    textAlign: "center",
    letterSpacing: 1.2,
  },

  button: {
    paddingVertical: 20,
  },

  filteredRecipes: {
    paddingHorizontal: 4,
    flex: 1,
  },
});

export default HomeScreen;
