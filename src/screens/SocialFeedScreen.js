import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';
import Colors from '../constants/Colors';

const FeedItem = ({ userName, restaurantName, rating, comment, timeAgo }) => (
  <View style={globalStyles.card}>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
      <View style={{ 
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        backgroundColor: Colors.primary, 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <Text style={{ color: Colors.text, fontWeight: 'bold', fontSize: 16 }}>
          {userName.charAt(0)}
        </Text>
      </View>
      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text style={{ color: Colors.text, fontWeight: '600', fontSize: 16 }}>
          {userName}
        </Text>
        <Text style={{ color: Colors.textTertiary, fontSize: 14 }}>
          {timeAgo}
        </Text>
      </View>
    </View>
    
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <Ionicons name="restaurant" size={16} color={Colors.primary} />
      <Text style={{ color: Colors.text, fontWeight: '600', marginLeft: 6, fontSize: 16 }}>
        {restaurantName}
      </Text>
    </View>

    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
      {[...Array(5)].map((_, i) => (
        <Ionicons 
          key={i} 
          name="star" 
          size={16} 
          color={i < rating ? Colors.warning : Colors.border} 
        />
      ))}
      <Text style={{ color: Colors.textSecondary, marginLeft: 8 }}>
        {rating}/5
      </Text>
    </View>

    <Text style={globalStyles.bodyText}>{comment}</Text>

    <View style={{ flexDirection: 'row', marginTop: 16, paddingTop: 16, borderTopWidth: 1, borderTopColor: Colors.border }}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 24 }}>
        <Ionicons name="heart-outline" size={20} color={Colors.textSecondary} />
        <Text style={{ color: Colors.textSecondary, marginLeft: 4 }}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="chatbubble-outline" size={20} color={Colors.textSecondary} />
        <Text style={{ color: Colors.textSecondary, marginLeft: 4 }}>Comment</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function SocialFeedScreen() {
  const feedData = [
    {
      id: 1,
      userName: 'Sarah M.',
      restaurantName: 'The Italian Corner',
      rating: 5,
      comment: 'Amazing pasta! The carbonara was perfectly creamy and authentic. Definitely coming back!',
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      userName: 'Mike J.',
      restaurantName: 'Sushi Paradise',
      rating: 4,
      comment: 'Great selection of fresh sushi. The salmon was excellent, but the service was a bit slow.',
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      userName: 'Emma L.',
      restaurantName: 'Burger Haven',
      rating: 5,
      comment: 'Best burger in town! The truffle fries are to die for. Highly recommend!',
      timeAgo: '1 day ago'
    },
  ];

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['bottom']}>
      <ScrollView style={globalStyles.screenContainer}>
        <View style={{ paddingVertical: 20 }}>
          {feedData.map(item => (
            <FeedItem key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}