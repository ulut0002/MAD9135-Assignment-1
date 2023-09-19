import { View } from "react-native";
import HomePage from "../pages/HomePage";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function HomeScreen({ navigation, route }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <HomePage navigation={navigation} route={route} />
    </View>
  );
}

export default HomeScreen;
