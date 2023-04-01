import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 200,
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    to: { marginLeft: 5, fontSize: 40, color: "#5F7EA4" },
    do: { fontSize: 40, color: "#32527B" },
  },
  addTask: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    input: {
      borderRadius: 4,
      width: 200,
      height: 40,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "#6d6d6d",
    },
    button: {
      padding: 8,
      margin: 10,
      borderRadius: 4,
      backgroundColor: "#053DA1",
    },
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    created: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#5F7EA4",
    },
    done: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#32527B",
    }
  },
});
