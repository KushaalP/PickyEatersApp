import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';
import Colors from '../constants/Colors';

export default function GameScreen() {
  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['bottom']}>
      <ScrollView style={globalStyles.screenContainer}>
        <View style={{ paddingVertical: 20 }}>
          <Text style={globalStyles.title}>Food Discovery Game</Text>
          <Text style={[globalStyles.bodyText, { marginBottom: 24 }]}>
            Play fun games to discover new foods and expand your palate!
          </Text>

          <View style={globalStyles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
              <Ionicons name="restaurant" size={24} color={Colors.primary} />
              <Text style={[globalStyles.subtitle, { marginLeft: 8, marginBottom: 0 }]}>
                Daily Challenge
              </Text>
            </View>
            <Text style={globalStyles.bodyText}>
              Try a new cuisine today and earn 50 points!
            </Text>
            <TouchableOpacity style={[globalStyles.button, { marginTop: 16 }]}>
              <Text style={globalStyles.buttonText}>Start Challenge</Text>
            </TouchableOpacity>
          </View>

          <View style={globalStyles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
              <Ionicons name="trophy" size={24} color={Colors.warning} />
              <Text style={[globalStyles.subtitle, { marginLeft: 8, marginBottom: 0 }]}>
                Food Trivia
              </Text>
            </View>
            <Text style={globalStyles.bodyText}>
              Test your food knowledge and learn fun facts!
            </Text>
            <TouchableOpacity style={[globalStyles.button, { marginTop: 16 }]}>
              <Text style={globalStyles.buttonText}>Play Trivia</Text>
            </TouchableOpacity>
          </View>

          <View style={globalStyles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
              <Ionicons name="dice" size={24} color={Colors.success} />
              <Text style={[globalStyles.subtitle, { marginLeft: 8, marginBottom: 0 }]}>
                Restaurant Roulette
              </Text>
            </View>
            <Text style={globalStyles.bodyText}>
              Let fate decide your next dining adventure!
            </Text>
            <TouchableOpacity style={[globalStyles.button, { marginTop: 16 }]}>
              <Text style={globalStyles.buttonText}>Spin the Wheel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}