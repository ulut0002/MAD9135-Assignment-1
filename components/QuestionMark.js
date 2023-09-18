import React from "react";
import { Image } from "react-native";

const QuestionMark = ({ style }) => {
  return (
    <Image style={style} source={require("../assets/question.png")}></Image>
  );
};

export default QuestionMark;
