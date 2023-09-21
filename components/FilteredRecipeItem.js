import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FilteredRecipeItem = ({ name, prepTime, cookTime, id }) => {
  const navigation = useNavigation();

  const formatTime = (min) => {
    if (min) return `${min} mins`;
    return "N/A";
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("Recipe", { id: id });
      }}
    >
      <View style={styles.nameContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.timeContainer}>
          <MaterialIcons name="access-time" size={18} color="black" />
          <Text>Prep: {formatTime(prepTime)}</Text>
          <Text>Cook: {formatTime(cookTime)}</Text>
        </View>
      </View>
      <View style={styles.navigateContainer}>
        <MaterialIcons name="navigate-next" size={42} color="black" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#886f45",
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 5,
    paddingStart: 10,
    paddingEnd: 5,
  },
  name: {
    fontWeight: "500",
    fontSize: 16,
  },
  nameContainer: {
    flexDirection: "column",
    gap: 5,
    flex: 1,
  },
  timeContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  navigateContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FilteredRecipeItem;
