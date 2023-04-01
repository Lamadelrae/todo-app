import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";
import { Task } from "../todo/components/Task";

export function Todo() {
  return (
    <>
      <View style={styles.headerContainer}>
        <FontAwesome5 name="tasks" size={40} color="#5F7EA4" />
        <Text style={styles.headerContainer.firstText}> to</Text>
        <Text style={styles.headerContainer.secondText}>do</Text>
      </View>

      <View style={styles.addTaskContainer}>
        <TextInput
          placeholder="Adicione uma tarefa"
          placeholderTextColor="#FFFF"
          style={styles.addTaskContainer.input}
        ></TextInput>

        <TouchableOpacity style={styles.addTaskContainer.button}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryContainer.created}>Criadas 5</Text>
        <Text style={styles.summaryContainer.done}>Concluídas 2</Text>
      </View>

      <Task text="Some Task" />
    </>
  );
}
