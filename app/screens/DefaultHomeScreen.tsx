// DefaultHomeScreen.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define navigation types
import { RootStackParamList } from '../navigation/types';


type DefaultHomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'DefaultHome'>;
};

export default function DefaultHomeScreen({ navigation }: DefaultHomeScreenProps) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 30, justifyContent: 'center' }}>
      <View style={{ alignItems: 'center', marginBottom: 60, marginTop: 150 }}>
        <Image
          source={require('../../assets/images/hometab-logo.png')}
          style={{ width: 307, height: 65 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ marginTop: 'auto', marginBottom: 300 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#3FCF04',
            paddingVertical: 20,
            borderRadius: 35,
            alignItems: 'center',
            marginBottom: 12,
          }}
          onPress={() => navigation.navigate('RenterPhone')}
        >
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Renter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: 'black',
            borderWidth: 2,
            paddingVertical: 20,
            borderRadius: 35,
            alignItems: 'center',
          }}
          onPress={() => {}}
        >
          <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>Landlord</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}