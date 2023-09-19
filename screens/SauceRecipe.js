import { SafeAreaView } from "react-native-safe-area-context";
import ThirdPage from "../pages/ThirdPage";

function SauceRecipe({ navigation, route }) {
  return (
    <SafeAreaView>
      <ThirdPage navigation={navigation} route={route} />
    </SafeAreaView>
  );
}

export default SauceRecipe;
