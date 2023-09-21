import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useApp } from "../context/useApp";
import FilteredRecipeItem from "./FilteredRecipeItem";
import ResultListEmpty from "./ResultListEmpty";

const FilteredRecipes = () => {
  const { filteredRecipes } = useApp();

  // source: chatGPT
  const ItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  const renderItem = ({ item }) => {
    const { name, prepTime, cookTime, id } = item;

    return (
      <FilteredRecipeItem
        name={name}
        prepTime={prepTime}
        cookTime={cookTime}
        id={id}
      />
    );
  };
  return (
    <FlatList
      style={{ height: "auto" }}
      data={filteredRecipes}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      ListEmptyComponent={ResultListEmpty}
      showsVerticalScrollIndicator={false}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  // source for item separator: chatGPT
  separator: {
    height: 5,
    backgroundColor: "transparent",
  },
});

export default FilteredRecipes;
