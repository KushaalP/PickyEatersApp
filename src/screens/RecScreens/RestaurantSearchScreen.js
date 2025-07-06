import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/globalStyles';
import Colors from '../../constants/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';

const mockRestaurants = [
  { id: '1', name: 'The Italian Kitchen', cuisine: 'Italian', rating: 4.5 },
  { id: '2', name: 'Sushi Paradise', cuisine: 'Japanese', rating: 4.7 },
  { id: '3', name: 'Burger House', cuisine: 'American', rating: 4.3 },
  { id: '4', name: 'Spice Garden', cuisine: 'Indian', rating: 4.6 },
  { id: '5', name: 'Le Petit Bistro', cuisine: 'French', rating: 4.8 },
  { id: '6', name: 'Taco Fiesta', cuisine: 'Mexican', rating: 4.4 },
  { id: '7', name: 'Dragon Wok', cuisine: 'Chinese', rating: 4.2 },
  { id: '8', name: 'Mediterranean Delights', cuisine: 'Mediterranean', rating: 4.5 },
];

export default function RestaurantSearchScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { source } = route.params || {};
  const [searchText, setSearchText] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants = mockRestaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleContinue = () => {
    if (source === 'solo') {
      navigation.navigate('SoloRecommendations', { restaurant: selectedRestaurant });
    } else {
      navigation.navigate('GroupRecommendations', { restaurant: selectedRestaurant });
    }
  };

  const RestaurantCard = ({ restaurant }) => (
    <TouchableOpacity
      style={[
        styles.restaurantCard,
        selectedRestaurant?.id === restaurant.id && styles.selectedCard
      ]}
      onPress={() => setSelectedRestaurant(restaurant)}
      activeOpacity={0.7}
    >
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Text style={styles.cuisineType}>{restaurant.cuisine}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color={Colors.warning} />
        <Text style={styles.rating}>{restaurant.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>

        <Text style={styles.title}>Select Restaurant</Text>
        <Text style={styles.subtitle}>
          {source === 'solo' ? 'Choose where you\'re dining' : 'Choose where your group is dining'}
        </Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={Colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search restaurants..."
            placeholderTextColor={Colors.textSecondary}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <ScrollView style={styles.restaurantList} showsVerticalScrollIndicator={false}>
          {filteredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </ScrollView>

        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedRestaurant && styles.disabledButton
          ]}
          onPress={handleContinue}
          disabled={!selectedRestaurant}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
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
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 48,
    marginLeft: 12,
    fontSize: 16,
    color: Colors.text,
  },
  restaurantList: {
    flex: 1,
    marginBottom: 20,
  },
  restaurantCard: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: Colors.primary,
    backgroundColor: Colors.card,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  cuisineType: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: Colors.text,
    marginLeft: 4,
  },
  continueButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: Colors.surface,
    opacity: 0.5,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.white,
  },
});