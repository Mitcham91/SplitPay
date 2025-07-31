//RenterBankConnectScreen

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const BackArrow = require('../../assets/images/back-arrow.png');
const PlaidLogo = require('../../assets/images/plaid-logo.png');

type RenterBankConnectScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RenterBankConnect'>;
};

export default function RenterBankConnectScreen({ navigation }: RenterBankConnectScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          {/* Top Section */}
          <View>
            <View style={styles.topBar}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={BackArrow} style={styles.backArrow} />
              </TouchableOpacity>

              <View style={styles.progressBar}>
                {[...Array(6)].map((_, i) => (
                  <View
                    key={i}
                    style={i === 1 ? styles.progressDotFilled : styles.progressDot}
                  />
                ))}
              </View>
            </View>

            <Text style={styles.heading}>Connect Your Bank Account</Text>
            <Text style={styles.subheading}>
              So we can schedule your payment and reduce fees.
            </Text>
          </View>

          {/* Bottom Section */}
          <View>
            <TouchableOpacity
              style={styles.connectButton}
              onPress={() => {
                console.log('Navigating to RenterVerifyLandlord');
                navigation.navigate('RenterVerifyLandlord');
              }}
            >
              <Text style={styles.connectButtonText}>Connect</Text>
            </TouchableOpacity>

            <View style={styles.plaidContainer}>
              <Text style={styles.poweredBy}>Powered by</Text>
              <Image source={PlaidLogo} style={styles.plaidLogo} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexGrow: 1,
    padding: 30,
    justifyContent: 'space-between',
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
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 16,
    color: '#888',
  },
  connectButton: {
    backgroundColor: '#3FCF04',
    paddingVertical: 20,
    borderRadius: 35,
    alignItems: 'center',
    marginBottom: 20,
  },
  connectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  plaidContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  poweredBy: {
    fontSize: 15,
    color: '#666',
    marginRight: -25,
  },
  plaidLogo: {
    width: 150,
    height: 90,
    resizeMode: 'contain',
  },
});


