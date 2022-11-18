import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import logoImg from '../assets/images/logo/todoimg.png'
interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  const tasksCounterText = tasksCounter === 1 ? 'tarefa' : 'tarefas'
  
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 173,
    width: '100%',
    paddingTop: getStatusBarHeight(true) + 36,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#0D0D0D',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasksCounter: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter_400Regular',
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter_700Bold',
  },
  logo: {
    width: 130,
    height: 36,
  }
});