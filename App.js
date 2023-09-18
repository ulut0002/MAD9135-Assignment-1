import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import SecondPage from "./screens/SecondPage";
import ThirdPage from "./screens/ThirdPage";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Home" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Second"
          component={SecondPage}
          options={{ title: "Second" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Third"
          component={ThirdPage}
          options={{ title: "Third" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
