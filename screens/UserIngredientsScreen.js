import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList, Text, View } from "react-native";
import { useApp } from "../context/useApp";
import { useEffect, useState } from "react";
import Ingredient from "../components/Ingredient";
import Style from "../style/Style";

function UserIngredientsScreen({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { ingredients, usersIngredients } = useApp();

  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Load the master list of ingredients,
  // and mark the existing ingredients in the list as .selected = true
  useEffect(() => {
    const list = ingredients.map((item) => {
      const { id } = item;
      const found = usersIngredients.includes((value) => {
        const { selectedId } = value;
        return id === selectedId;
      });
      return {
        ...item,
        selected: found,
      };
    });
    setSelectedIngredients(list);
  }, []);

  // each list item will display a caption, and a checkbox
  const renderItem = ({ item }) => {
    const { id, name, selected } = item;
    return (
      <Ingredient
        key={id}
        ingredientID={id}
        ingredientName={name}
        selected={selected}
      ></Ingredient>
    );
  };

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <Text style={Style.cta_title}>What do you have in your kitchen?</Text>
      <FlatList
        data={selectedIngredients}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
}

export default UserIngredientsScreen;
