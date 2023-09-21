import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "../context/useApp";

const Ingredient = ({ ingredientID, ingredientName = "Ingredient" }) => {
  const [currentSelection, setCurrentSelection] = useState(false);
  const {
    addUserIngredient,
    removeUserIngredient,
    isIngredientSelected,
    usersIngredients,
  } = useApp();

  useEffect(() => {
    setCurrentSelection(isIngredientSelected(ingredientID));
  }, [usersIngredients]);

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (!currentSelection) {
          addUserIngredient && addUserIngredient(ingredientID);
        } else {
          removeUserIngredient && removeUserIngredient(ingredientID);
        }
        setCurrentSelection(!currentSelection);
      }}
    >
      <Text style={styles.text}>{ingredientName}</Text>
      {currentSelection ? (
        <Ionicons name="checkbox-outline" size={24} color="black" />
      ) : (
        <Ionicons name="square-outline" size={24} color="black" />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 15,
    fontWeight: "600",
  },
});

export default Ingredient;
