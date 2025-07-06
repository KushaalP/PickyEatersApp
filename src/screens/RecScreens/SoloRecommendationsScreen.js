import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/globalStyles';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default function SoloRecommendationsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['bottom']}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Ionicons name="person" size={80} color={Colors.primary} />
          </View>
          
          <Text style={globalStyles.screenTitle}>Solo Dining</Text>
          
          <Text style={styles.placeholderText}>
            Your personalized recommendations will appear here
          </Text>
          
          <Text style={styles.comingSoonText}>
            Coming Soon
          </Text>
          
          <View style={styles.featureList}>
            <Text style={styles.featureTitle}>Features in development:</Text>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
              <Text style={styles.featureText}>Personalized cuisine preferences</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
              <Text style={styles.featureText}>Dietary restrictions matching</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
              <Text style={styles.featureText}>Price range preferences</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
              <Text style={styles.featureText}>Location-based suggestions</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: Colors.surface,
    padding: 30,
    borderRadius: 60,
    marginBottom: 30,
  },
  placeholderText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  comingSoonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 40,
  },
  featureList: {
    width: '100%',
    maxWidth: 300,
  },
  featureTitle: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '600',
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 12,
    flex: 1,
  },
});