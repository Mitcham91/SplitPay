// RenterPhoneScreen.tsx

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
import { RootStackParamList } from '../navigation/types';

// ✅ Import custom icons
const BackArrow = require('../../assets/images/back-arrow.png');
const CheckMark = require('../../assets/images/check-mark.png');

type RenterPhoneScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RenterPhone'>;
};

export default function RenterPhoneScreen({ navigation }: RenterPhoneScreenProps) {
  const [phone, setPhone] = useState('');

  const numericPhone = phone.replace(/\D/g, '');
  const isValid = numericPhone.length === 10;

  useEffect(() => {
    if (isValid) {
      Keyboard.dismiss();
    }
  }, [numericPhone]);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 75 }]} keyboardShouldPersistTaps="handled">
        {/* Top Bar: back arrow + progress */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={BackArrow} style={styles.backArrow} />
          </TouchableOpacity>
          <View style={styles.progressBar}>
            <View style={styles.progressDotFilled} />
            <View style={styles.progressDot} />
            <View style={styles.progressDot} />
            <View style={styles.progressDot} />
            <View style={styles.progressDot} />
            <View style={styles.progressDot} />
          </View>
        </View>

        {/* Main content */}
        <View style={styles.content}>
          {/* Upper section */}
          <View>
            <Text style={styles.heading}>Enter Your Phone Number</Text>
            <Text style={styles.subheading}>
              We use your phone number to create a secure account
            </Text>

            <Text style={styles.label}>Mobile number</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholder=""
              value={phone}
              onChangeText={setPhone}
              maxLength={15}
            />

            <View style={styles.features}>
              {[
                'Split Rent Payments',
                'Build Your Credit',
                'Seamless Autopay',
                'App dashboard with notifications',
                'In-app chat & reminders',
              ].map((text, index) => (
                <View style={styles.featureItem} key={index}>
                  <Image source={CheckMark} style={styles.greenCheck} />
                  <Text style={styles.featureText}>{text}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Bottom section */}
          <View>
            <Text style={styles.termsText}>
              By tapping Send Code, you confirm you're authorized to use the number entered and
              agree to receive texts. Carrier fees may apply. Review how we protect data in our{' '}
              <Text style={styles.linkText}>Privacy Statement</Text>
            </Text>

            <TouchableOpacity
              style={[
                styles.sendCodeButton,
                !isValid && styles.sendCodeButtonDisabled,
              ]}
              disabled={!isValid}
              onPress={() => {
                navigation.navigate('RenterCode', { phone: numericPhone });
              }}
            >
              <Text
                style={[
                  styles.sendCodeText,
                  !isValid && styles.sendCodeTextDisabled,
                ]}
              >
                Send Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  backArrow: {
    width: 50,
    height: 50,
    marginBottom: 0,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  progressDot: {
    width: 20,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  progressDotFilled: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3FCF04',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 16,
    color: '#999',
    marginBottom: 24,
  },
  label: {
    fontWeight: '600',
    color: '#999',
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 32,
    fontSize: 16,
    paddingVertical: 8,
  },
  features: {
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  greenCheck: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  featureText: {
    fontSize: 16,
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 16,
  },
  linkText: {
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  sendCodeButton: {
    backgroundColor: '#3FCF04',
    paddingVertical: 20,
    borderRadius: 35,
    alignItems: 'center',
  },
  sendCodeButtonDisabled: {
    backgroundColor: '#ccc',
  },
  sendCodeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  sendCodeTextDisabled: {
    color: '#888',
  },
});


