import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import { AppProvider } from "./context/useApp";
import UserIngredientsScreen from "./screens/UserIngredientsScreen";
import SauceRecipe from "./screens/SauceRecipe";
const Stack = createNativeStackNavigator();

export default function App() {
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
              options={{ title: "Third" }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>
  );
}
