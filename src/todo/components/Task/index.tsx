import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

export function Task({ text }: { text: string }) {
  return (
    <View style={styles.task}>
      <Text>{text}</Text>
      <FontAwesome5 name="trash" size={24} color="black" />
    </View>
  );
}
