import { createContext, useContext, useState } from "react";
import {
  defaultIngredients,
  ingredients as ingredientsData,
  recipes as recipesData,
} from "../data/data";
import { shuffleArray } from "../utils/utils";

const loadDefaultIngredients = () => {
  if (
    defaultIngredients &&
    Array.isArray(defaultIngredients) &&
    defaultIngredients.length > 0
  ) {
    const list = [];
    defaultIngredients.forEach((item) => {
      const ingredient = ingredientsData.find((item2) => {
        return item2.id == item;
      });
      if (ingredient) list.push(ingredient);
    });
    return list;
  } else {
    return [];
  }
};

const AppContext = createContext({});

export function useApp() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [ingredients, setIngredients] = useState(ingredientsData);
  const [recipes, setRecipes] = useState(recipesData);
  const [usersIngredients, setUsersIngredients] = useState(
    loadDefaultIngredients()
  );
  const [loadingRecipes, setLoadingRecipes] = useState(false);

  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const retrieveRecipes = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    setLoadingRecipes(true);
    let list = recipes.filter((recipe) => {
      const { ingredients: recipeIngredients } = recipe;
      // console.log("recipeIngredients", recipeIngredients);

      if (
        !recipeIngredients ||
        !Array.isArray(recipeIngredients) ||
        recipeIngredients.length === 0
      )
        return false;

      let goodRecipe = true;
      const count = recipeIngredients.count;

      recipeIngredients.forEach((recipeIngredient) => {
        const index = usersIngredients.findIndex((userIngredient) => {
          return userIngredient.id === recipeIngredient.item;
        });
        if (index < 0) {
          goodRecipe = false;
        }
      });

      if (goodRecipe) {
        return true;
      }
      return false;
    });
    shuffleArray(list);

    await delay(2000); // to show the loading indicator
    setFilteredRecipes(list);
    setLoadingRecipes(false);
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
    const itemFound = usersIngredients.find((item) => {
      return id == item.id;
    });
    if (!itemFound) return false;
    return true;
  };

  const getRecipeDetails = (id) => {
    return recipes.find((item) => item.id === id);
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
        retrieveRecipes,
        getRecipeDetails,
        loadingRecipes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
