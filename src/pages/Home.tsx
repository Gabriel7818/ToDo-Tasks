import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";
import { TasksCounter } from "../components/Tasks";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksDone, setTasksDone] = useState<number>(0)
  const completes = tasks.filter((task) => {
    return task.done !== false;
  });

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => ({ ...task }));
    const foundItem = updatedTasks.find((item) => item.id === id);
    if (!foundItem) return;
    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id : number, title: string) {
    Alert.alert(
      "Remover",
      `Deseja remover a tarefa ${tasks.find((task) => task.id === id)?.title}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            const filterTasks = tasks.filter((task) => task.id !== id);
            setTasks(filterTasks);
            const total = filterTasks.reduce(
              (total, { done }) => (done ? total + 1 : total),
              0
            );
            setTasksDone(total);
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksCounter
          tasksCounter={tasks.length}
          tasksConfirmed={completes.length}
        />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  tasks: {
    flex: 1,
    flexDirection: "row",
  },
});
