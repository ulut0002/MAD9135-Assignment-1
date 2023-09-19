import { createContext, useContext, useState } from "react";
import {
  ingredients as ingredientsData,
  recipes as recipesData,
} from "../data/data";

const AppContext = createContext({});

export function useApp() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [ingredients, setIngredients] = useState(ingredientsData);
  const [recipes, setRecipes] = useState(recipesData);
  const [usersIngredients, setUsersIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const getUpdatedUserIngredientList = (selectedIngredientId, add = true) => {
    const newList = usersIngredients.map((item) => {
      const { id } = item;
      if (selectedIngredientId === id) {
        return { ...item, selected: add === true };
      } else {
        return { ...item };
      }
    });
    return newList;
  };

  const addUserIngredient = (selectedIngredientId) => {
    const index = usersIngredients.findIndex(
      (item) => item.id === selectedIngredientId
    );
    if (index > 0) return;

    const item = ingredients.find((item) => item.id === selectedIngredientId);

    if (item) {
      setUsersIngredients([...usersIngredients, { ...item }]);
    }
  };
  const removeUserIngredient = (selectedIngredientId) => {
    const newList = usersIngredients.filter(
      (item) => item.id !== selectedIngredientId
    );

    setUsersIngredients(newList);
  };

  const isIngredientSelected = (id) => {
    if (id === "BUTTER") {
      console.log(usersIngredients);
    }
    const itemFound = usersIngredients.find((item) => {
      return id == item.id;
    });
    if (!itemFound) return false;
    return true;
  };

  return (
    <AppContext.Provider
      value={{
        ingredients,
        recipes,
        usersIngredients,
        setUsersIngredients,
        filteredRecipes,
        addUserIngredient,
        removeUserIngredient,
        isIngredientSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
