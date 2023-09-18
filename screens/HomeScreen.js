import { SafeAreaView } from "react-native";
import HomePage from "../pages/HomePage";

function HomeScreen({ navigation, route }) {
  return (
    <SafeAreaView>
      <HomePage navigation={navigation} route={route} />
    </SafeAreaView>
  );
}

export default HomeScreen;
