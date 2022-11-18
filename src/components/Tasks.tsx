import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
  tasksCounter?: number;
  tasksConfirmed?: number;
}

export function TasksCounter({ tasksCounter, tasksConfirmed }: Props) {
  return (
    <View>
      <View style={styles.tasks}>
        <View style={styles.tasksAling}>
          <Text style={styles.tasksCounterBold}>Criadas</Text>
          <View style={styles.tasksArea}>
            <Text style={styles.tasksBold}>{tasksCounter}</Text>
          </View>
        </View>
        <View style={styles.tasksAling}>
          <Text style={styles.tasksCounterBoldConfirmed}>Concluídas</Text>
          <View style={styles.tasksArea}>
            <Text style={styles.tasksBold}>{tasksConfirmed}</Text>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  tasks: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  tasksAling: {
    flexDirection: "row",
  },
  tasksBold: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Inter_700Bold",
  },
  tasksArea: {
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 26,
    marginLeft: 8,
    backgroundColor: "#333333",
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
  },
  tasksCounterBold: {
    fontSize: 15,
    color: "#4EA8DE",
    fontFamily: "Inter_700Bold",
  },
  tasksCounterBoldConfirmed: {
    fontSize: 15,
    color: "#8284FA",
    fontFamily: "Inter_700Bold",
  },
  line: {
    height: 1,
    backgroundColor: "#333333",
    marginHorizontal: 24
  },
});