import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';
import Colors from '../constants/Colors';

const StatBox = ({ label, value, icon }) => (
  <View style={{ 
    flex: 1, 
    backgroundColor: Colors.card, 
    padding: 16, 
    borderRadius: 12, 
    alignItems: 'center',
    marginHorizontal: 4,
  }}>
    <Ionicons name={icon} size={24} color={Colors.primary} />
    <Text style={{ color: Colors.text, fontSize: 24, fontWeight: 'bold', marginTop: 8 }}>
      {value}
    </Text>
    <Text style={{ color: Colors.textSecondary, fontSize: 14, marginTop: 4 }}>
      {label}
    </Text>
  </View>
);

const MenuItem = ({ icon, label, onPress, showBorder = true }) => (
  <TouchableOpacity 
    onPress={onPress}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: showBorder ? 1 : 0,
      borderBottomColor: Colors.border,
    }}
  >
    <Ionicons name={icon} size={24} color={Colors.textSecondary} />
    <Text style={{ color: Colors.text, fontSize: 16, marginLeft: 16, flex: 1 }}>
      {label}
    </Text>
    <Ionicons name="chevron-forward" size={20} color={Colors.textTertiary} />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['bottom']}>
      <ScrollView style={globalStyles.screenContainer}>
        <View style={{ paddingVertical: 20 }}>
          <View style={{ alignItems: 'center', marginBottom: 32 }}>
            <View style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: Colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}>
              <Text style={{ color: Colors.text, fontSize: 40, fontWeight: 'bold' }}>
                J
              </Text>
            </View>
            <Text style={{ color: Colors.text, fontSize: 24, fontWeight: 'bold' }}>
              John Doe
            </Text>
            <Text style={{ color: Colors.textSecondary, fontSize: 16, marginTop: 4 }}>
              Food Explorer
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 32, marginHorizontal: -4 }}>
            <StatBox label="Tried" value="47" icon="restaurant" />
            <StatBox label="Points" value="520" icon="trophy" />
            <StatBox label="Friends" value="23" icon="people" />
          </View>

          <View style={globalStyles.card}>
            <Text style={[globalStyles.subtitle, { marginBottom: 16 }]}>
              Account Settings
            </Text>
            <MenuItem icon="person-outline" label="Edit Profile" />
            <MenuItem icon="notifications-outline" label="Notifications" />
            <MenuItem icon="location-outline" label="Location Preferences" />
            <MenuItem icon="heart-outline" label="Dietary Preferences" />
            <MenuItem icon="shield-checkmark-outline" label="Privacy" showBorder={false} />
          </View>

          <View style={[globalStyles.card, { marginTop: 16 }]}>
            <Text style={[globalStyles.subtitle, { marginBottom: 16 }]}>
              Support
            </Text>
            <MenuItem icon="help-circle-outline" label="Help Center" />
            <MenuItem icon="mail-outline" label="Contact Us" />
            <MenuItem icon="document-text-outline" label="Terms of Service" />
            <MenuItem icon="log-out-outline" label="Sign Out" showBorder={false} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}