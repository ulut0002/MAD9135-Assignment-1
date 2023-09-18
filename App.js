import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ title: "Second" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{ title: "Third" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
