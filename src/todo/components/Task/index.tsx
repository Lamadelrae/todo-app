import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export function Task({ text, isDone }: { text: string; isDone: boolean }) {
  return (
    <View style={styles.task}>
      {isDone ? (
        <FontAwesome name="check-circle" size={24} color="black" />
      ) : (
        <FontAwesome name="circle-thin" size={24} color="black" />
      )}

      <View style={styles.textBox}>
        {isDone ? (
          <Text style={{ textDecorationLine: "line-through" }}>{text}</Text>
        ) : (
          <Text>{text}</Text>
        )}
      </View>

      <FontAwesome5 name="trash" size={24} color="black" />
    </View>
  );
}
