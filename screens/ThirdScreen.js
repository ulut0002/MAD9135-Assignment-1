import { SafeAreaView } from "react-native-safe-area-context";
import ThirdPage from "../pages/ThirdPage";

function ThirdScreen({ navigation, route }) {
  return (
    <SafeAreaView>
      <ThirdPage navigation={navigation} route={route} />
    </SafeAreaView>
  );
}

export default ThirdScreen;
