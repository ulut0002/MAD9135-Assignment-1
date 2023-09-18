import { SafeAreaView } from "react-native-safe-area-context";
import SecondPage from "../pages/SecondPage";

function SecondScreen({ navigation, route }) {
  return (
    <SafeAreaView>
      <SecondPage navigation={navigation} route={route} />
    </SafeAreaView>
  );
}

export default SecondScreen;
