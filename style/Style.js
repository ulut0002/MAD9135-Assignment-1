import { StyleSheet } from "react-native";

const primary_color = "#f6f3e6";

export default styles = StyleSheet.create({
  bg: {
    backgroundColor: primary_color,
  },
  fullscreen: {
    flex: 1,
  },
  cta_title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 20,
    textAlign: "center",
  },

  button: {
    paddingVertical: 20,
  },

  squareButton: {
    width: 150,
    height: 150,
  },

  link: {
    fontSize: 17,
    color: "orangered",
    fontWeight: "bold",
  },
});
