// RenterCodeScreen.tsx

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const BackArrow = require('../../assets/images/back-arrow.png');

type RenterCodeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RenterCode'>;
  route: RouteProp<RootStackParamList, 'RenterCode'>;
};

export default function RenterCodeScreen({ navigation, route }: RenterCodeScreenProps) {
  const [code, setCode] = useState('');
  const phone = route.params?.phone ?? 'Unknown';

  // 👇 Auto-submit when 5 digits entered
useEffect(() => {
  if (code.length === 5) {
    Keyboard.dismiss();
    navigation.navigate('RenterBankConnect');
  }
}, [code]);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        {/* Top Bar */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackArrow} style={styles.backArrow} />
        </TouchableOpacity>

        <Text style={styles.heading}>Enter Code</Text>

        <Text style={styles.subtext}>We sent it to:</Text>
        <Text style={styles.phone}>{phone}</Text>

        <Text style={styles.inputLabel}>Confirmation Code</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          keyboardType="numeric"
          maxLength={5}
          value={code}
          onChangeText={setCode}
        />

        <TouchableOpacity onPress={() => console.log('Resend Code')}>
          <Text style={styles.resend}>Resend Code</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexGrow: 1,
    padding: 30,
  },
  backArrow: {
    width: 50,
    height: 50,
    marginBottom: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
  },
  subtext: {
    fontSize: 16,
    color: '#999',
  },
  phone: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 40,
  },
  inputLabel: {
    fontWeight: '600',
    color: '#bbb',
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 18,
    paddingVertical: 8,
    marginBottom: 40,
  },
  resend: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3FCF04',
  },
});
