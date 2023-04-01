import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    firstText: { fontSize: 40, color: "#5F7EA4" },
    secondText: { fontSize: 40, color: "#32527B" },
  },
  addTaskContainer: {
    marginTop: 10,
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
  summaryContainer: {
    marginTop: 40,
    paddingHorizontal: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    created: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#5F7EA4",
    },
    done: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#32527B",
    }
  },
});
