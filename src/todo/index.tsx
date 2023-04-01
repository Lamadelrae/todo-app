import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";
import { Task } from "../todo/components/Task";

export function Todo() {
  const data = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt reprehenderit quos ab veniam ex vero delectus animi sapiente quasi? Dolorem blanditiis rem doloribus. Itaque illum temporibus sapiente facilis quis.",
      isDone: true,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt reprehenderit quos ab veniam ex vero delectus animi sapiente quasi? Dolorem blanditiis rem doloribus. Itaque illum temporibus sapiente facilis quis.",
      isDone: false,
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <FontAwesome5 name="tasks" size={40} color="#5F7EA4" />
          <Text style={styles.header.to}>to</Text>
          <Text style={styles.header.do}>do</Text>
        </View>

        <View style={styles.addTask}>
          <TextInput
            placeholder="Adicione uma tarefa"
            placeholderTextColor="#FFFF"
            style={styles.addTask.input}
          ></TextInput>

          <TouchableOpacity style={styles.addTask.button}>
            <Ionicons name="add-circle-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.summary}>
          <Text style={styles.summary.created}>Criadas {data.length}</Text>
          <Text style={styles.summary.done}>
            Concluídas {data.filter((i) => i.isDone).length}
          </Text>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Task text={item.text} isDone={item.isDone} />
          )}
          keyExtractor={(item) => item.text}
        />
      </View>
    </>
  );
}
