import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;
const CARD_HEIGHT = 200;

export default function RecommendationsScreen() {
  const navigation = useNavigation();

  const handleSoloPress = () => {
    navigation.navigate('SoloRecommendations');
  };

  const handleGroupPress = () => {
    navigation.navigate('GroupRecommendations');
  };

  const RecommendationCard = ({ title, description, icon, iconType, onPress, gradient }) => (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.cardContent, { backgroundColor: gradient }]}>
        <View style={styles.cardHeader}>
          <View style={styles.iconContainer}>
            {iconType === 'ionicons' ? (
              <Ionicons name={icon} size={50} color={Colors.white} />
            ) : (
              <MaterialCommunityIcons name={icon} size={50} color={Colors.white} />
            )}
          </View>
          <View style={styles.arrowContainer}>
            <Ionicons name="arrow-forward" size={24} color={Colors.white} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription} numberOfLines={2}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Choose your dining experience</Text>
        </View>
        
        <View style={styles.cardsContainer}>
          <RecommendationCard
            title="Solo Dining"
            description="Personalized recommendations just for you based on your preferences"
            icon="person"
            iconType="ionicons"
            onPress={handleSoloPress}
            gradient={Colors.primary}
          />
          
          <RecommendationCard
            title="Group Dining"
            description="Find the perfect order that satisfies everyone's tastes"
            icon="account-group"
            iconType="material"
            onPress={handleGroupPress}
            gradient={Colors.secondary}
          />
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
  header: {
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
  },
  cardsContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 20,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  cardContent: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 12,
    borderRadius: 12,
  },
  arrowContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 22,
  },
});