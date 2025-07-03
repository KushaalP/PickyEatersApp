import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';
import Colors from '../constants/Colors';

const RestaurantCard = ({ name, cuisine, rating, distance, priceLevel }) => (
  <View style={globalStyles.card}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: Colors.text, fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>
          {name}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <MaterialCommunityIcons name="silverware-fork-knife" size={16} color={Colors.primary} />
          <Text style={{ color: Colors.textSecondary, marginLeft: 6 }}>{cuisine}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
            <Ionicons name="star" size={16} color={Colors.warning} />
            <Text style={{ color: Colors.textSecondary, marginLeft: 4 }}>{rating}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
            <Ionicons name="location" size={16} color={Colors.textSecondary} />
            <Text style={{ color: Colors.textSecondary, marginLeft: 4 }}>{distance}</Text>
          </View>
          <Text style={{ color: Colors.success }}>{'$'.repeat(priceLevel)}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name="bookmark-outline" size={24} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  </View>
);

const FilterButton = ({ label, isActive, onPress }) => (
  <TouchableOpacity 
    onPress={onPress}
    style={{
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: isActive ? Colors.primary : Colors.surface,
      borderWidth: 1,
      borderColor: isActive ? Colors.primary : Colors.border,
      marginRight: 8,
    }}
  >
    <Text style={{ color: isActive ? Colors.text : Colors.textSecondary, fontWeight: '600' }}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function RecommendationsScreen() {
  const [activeFilter, setActiveFilter] = useState('all');

  const recommendations = [
    { id: 1, name: 'Fusion Kitchen', cuisine: 'Asian Fusion', rating: 4.5, distance: '0.5 mi', priceLevel: 2 },
    { id: 2, name: 'The Veggie Garden', cuisine: 'Vegetarian', rating: 4.7, distance: '1.2 mi', priceLevel: 2 },
    { id: 3, name: 'Spice Route', cuisine: 'Indian', rating: 4.3, distance: '0.8 mi', priceLevel: 3 },
    { id: 4, name: 'Mediterranean Delights', cuisine: 'Mediterranean', rating: 4.6, distance: '2.0 mi', priceLevel: 2 },
    { id: 5, name: 'The Noodle House', cuisine: 'Thai', rating: 4.4, distance: '1.5 mi', priceLevel: 1 },
  ];

  const filters = ['All', 'Near Me', 'Top Rated', 'Budget', 'New'];

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['bottom']}>
      <ScrollView style={globalStyles.screenContainer}>
        <View style={{ paddingVertical: 20 }}>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: Colors.surface,
            borderRadius: 12,
            paddingHorizontal: 16,
            marginBottom: 20,
          }}>
            <Ionicons name="search" size={20} color={Colors.textSecondary} />
            <TextInput
              placeholder="Search restaurants..."
              placeholderTextColor={Colors.textTertiary}
              style={{
                flex: 1,
                paddingVertical: 12,
                paddingHorizontal: 12,
                fontSize: 16,
                color: Colors.text,
              }}
            />
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
          >
            {filters.map((filter) => (
              <FilterButton
                key={filter}
                label={filter}
                isActive={activeFilter === filter.toLowerCase()}
                onPress={() => setActiveFilter(filter.toLowerCase())}
              />
            ))}
          </ScrollView>

          <Text style={[globalStyles.subtitle, { marginBottom: 16 }]}>
            Recommended for You
          </Text>

          {recommendations.map(restaurant => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}