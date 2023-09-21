import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider } from "./context/useApp";

import HomeScreen from "./screens/HomeScreen";
import UserIngredientsScreen from "./screens/UserIngredientsScreen";
import SauceRecipe from "./screens/SauceRecipe";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <AppProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Home" }}
            ></Stack.Screen>
            <Stack.Screen
              name="Ingredients"
              component={UserIngredientsScreen}
              options={{ title: "Ingredients", headerBackTitle: "Back" }}
            ></Stack.Screen>
            <Stack.Screen
              name="Recipe"
              component={SauceRecipe}
              options={{ title: "Recipe" }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>
  );
}
