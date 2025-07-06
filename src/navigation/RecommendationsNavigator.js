import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

import RecommendationsScreen from '../screens/RecommendationsScreen';
import SoloRecommendationsScreen from '../screens/RecScreens/SoloRecommendationsScreen';
import GroupRecommendationsScreen from '../screens/RecScreens/GroupRecommendationsScreen';

const Stack = createStackNavigator();

export default function RecommendationsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.background }
      }}
    >
      <Stack.Screen 
        name="RecommendationsMain" 
        component={RecommendationsScreen}
      />
      <Stack.Screen 
        name="SoloRecommendations" 
        component={SoloRecommendationsScreen}
      />
      <Stack.Screen 
        name="GroupRecommendations" 
        component={GroupRecommendationsScreen}
      />
    </Stack.Navigator>
  );
}