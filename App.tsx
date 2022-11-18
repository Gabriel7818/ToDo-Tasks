import React from 'react';
import { StatusBar } from 'react-native';
import * as SplashScrean from 'expo-splash-screen';
import { Home } from './src/pages/Home';

import { 
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font';
SplashScrean.preventAutoHideAsync();

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  })
  if(!fontLoaded){
    return null;
  }
  SplashScrean.hideAsync();
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
    </>
  );
}
