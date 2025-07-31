import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const BackArrow = require('../../assets/images/back-arrow.png');

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RenterVerifyLandlord'>;
};

export default function RenterVerifyLandlord({ navigation }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const isValid = name.trim() !== '' && phone.replace(/\D/g, '').length === 10;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={60}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
              keyboardShouldPersistTaps="handled"
            >
              <View>
                {/* Top Bar */}
                <View style={styles.topBar}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={BackArrow} style={styles.backArrow} />
                  </TouchableOpacity>

                  <View style={styles.progressBar}>
                    <View style={styles.progressDot} />
                    <View style={styles.progressDot} />
                    <View style={styles.progressDotFilled} />
                    <View style={styles.progressDot} />
                    <View style={styles.progressDot} />
                    <View style={styles.progressDot} />
                  </View>
                </View>

                {/* Heading */}
                <Text style={styles.heading}>Verify and Link Your Landlord</Text>
                <Text style={styles.subheading}>
                  We’ll send a text to your landlord from you to confirm the connection.
                </Text>

                {/* Form */}
                <View style={styles.form}>
                  {/* Name */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Landlord's Full Name</Text>
                    <TextInput
                      style={styles.input}
                      placeholder=""
                      placeholderTextColor="#999"
                      value={name}
                      onChangeText={setName}
                      returnKeyType="done"
                    />
                  </View>

                  {/* Phone */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Landlord's Phone Number</Text>
                    <TextInput
                      style={styles.input}
                      placeholder=""
                      placeholderTextColor="#999"
                      keyboardType="phone-pad"
                      value={phone}
                      onChangeText={setPhone}
                      maxLength={15}
                      returnKeyType="done"
                      onSubmitEditing={Keyboard.dismiss}
                    />
                  </View>

                  {/* Email */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Landlord's Email (optional)</Text>
                    <TextInput
                      style={styles.input}
                      placeholder=""
                      placeholderTextColor="#999"
                      keyboardType="email-address"
                      value={email}
                      onChangeText={setEmail}
                      autoCapitalize="none"
                      returnKeyType="done"
                    />
                  </View>
                </View>
              </View>

              {/* Bottom button */}
              <View style={[styles.buttonContainer, { marginTop: 'auto' }]}>
                <TouchableOpacity
                  style={[styles.button, !isValid && styles.buttonDisabled]}
                  disabled={!isValid}
                  onPress={() => {
                    navigation.navigate('RenterLandlordConfirm', {
                      name,
                      phone: phone.replace(/\D/g, ''),
                      email,
                    });
                  }}
                >
                  <Text style={styles.buttonText}>Send Verification</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 30,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
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
    marginBottom: 15,
  },
  form: {
    marginTop: 20,
  },
  inputGroup: {
    position: 'relative',
    marginBottom: 36,
  },
  label: {
    fontSize: 13,
    color: '#999',
    marginBottom: 6,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonContainer: {
    paddingHorizontal: 0,
    paddingBottom: 30,
  },
  button: {
    backgroundColor: '#3FCF04',
    paddingVertical: 20,
    borderRadius: 35,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  subheading: {
    fontSize: 16,
    color: '#888',
    marginBottom: 50,
  },
});






