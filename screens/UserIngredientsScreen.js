import SecondPage from "../pages/SecondPage";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList, View } from "react-native";
import { useApp } from "../context/useApp";
import { useEffect, useState } from "react";
import Ingredient from "../components/Ingredient";

function UserIngredientsScreen({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { ingredients, usersIngredients, setUsersIngredients } = useApp();

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const selectIngredient = (id) => {};
  const deSelectIngredient = (id) => {};

  // initial load.
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
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <FlatList
        data={selectedIngredients}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
}

export default UserIngredientsScreen;

// {selectedIngredients.map((item) => {
//   return (

//   );
// })}
