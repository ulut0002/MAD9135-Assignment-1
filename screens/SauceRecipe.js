import { Link, useRoute } from "@react-navigation/native";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { useApp } from "../context/useApp";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Style from "../style/Style";
import { MaterialIcons } from "@expo/vector-icons";
import { Linking } from "react-native";

function SauceRecipe() {
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const { id } = route.params;
  const { getRecipeDetails } = useApp();

  let ingredientCounter = 0;
  let stepCounter = 0;

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    setRecipe(getRecipeDetails(id));
  }, [id]);

  //source: chatGPT
  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error("Cannot open this URL.");
      }
    } catch (error) {
      console.error("An error occurred: ", error);
    }
  };

  if (!recipe || !recipe.id) {
    return <Text>Sorry. We couldn't find the recipe you are looking for</Text>;
  }

  const {
    name,
    description,
    prepTime,
    cookTime,
    servings,
    image,
    ingredients,
    directions,
    source,
  } = recipe;

  return (
    <ScrollView>
      <View
        style={[
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left + 10,
            paddingRight: insets.right + 10,
          },
          Style.bg,
          Style.fullscreen,
          styles.container,
        ]}
      >
        <View style={styles.nameBorder}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.timerContainer}>
          <View>
            <Text style={styles.title}>Prep time</Text>
            <Text>{prepTime}</Text>
          </View>
          <View>
            <Text style={styles.title}>Cook time</Text>
            <Text>{cookTime}</Text>
          </View>
          <View>
            <Text style={styles.title}>Servings</Text>
            <Text>{servings}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.description}>{description}</Text>
        </View>

        {image && (
          <View>
            <Image source={{ uri: image }} style={styles.image}></Image>
          </View>
        )}
        <View>
          <Text style={styles.ingredientTitle}>Ingredients</Text>
          {ingredients &&
            ingredients.map((ingredient) => {
              const { item, qty } = ingredient;
              ingredientCounter++;
              return (
                <View
                  key={ingredientCounter}
                  style={[
                    {
                      flexDirection: "row",
                      alignContent: "center",
                      alignItems: "center",
                      gap: 5,
                      paddingVertical: 5,
                    },
                  ]}
                >
                  <MaterialIcons name="circle" size={8} color="black" />
                  <Text>{qty}</Text>
                </View>
              );
            })}
        </View>

        <View>
          <Text style={styles.ingredientTitle}>Instructions</Text>
        </View>
        <View>
          {directions &&
            Array.isArray(directions) &&
            directions.length > 0 &&
            directions.map((direction) => {
              const { description } = direction;
              stepCounter++;
              return (
                <View key={stepCounter} style={[styles.direction]}>
                  <View style={styles.circle}>
                    <Text style={styles.directionIndex}>{stepCounter}</Text>
                  </View>
                  <Text style={{ flex: 1 }}>{description}</Text>
                </View>
              );
            })}
        </View>
        {source && (
          <Pressable
            onPress={() => {
              openLink(source);
            }}
          >
            <Text style={Style.link}>View Full Recipe</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    flex: 1,
  },

  name: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  nameBorder: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },

  timerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  title: {
    fontWeight: "bold",
  },

  ingredientTitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  description: {
    fontSize: 15,
  },

  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
  },

  direction: {
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    paddingRight: 20,
    alignContent: "center",
    alignItems: "center",
  },

  directionIndex: {
    fontWeight: "bold",
    color: "#000",
  },

  // chatgpt
  circle: {
    height: 30,
    width: 30,
    borderRadius: 1000,
    backgroundColor: "lightblue", // Example background color for the circle
    justifyContent: "center", // Center content inside the circle horizontally
    alignItems: "center", // Center content inside the circle vertically
    alignSelf: "flex-start",
  },
});

export default SauceRecipe;
