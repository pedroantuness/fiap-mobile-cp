import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const fazerLogin = () => {
    if (emailInput === 'teste@teste.com' && passwordInput === 'teste') {
      navigation.navigate('Details', { name: emailInput });
    } else {
      setEmailInput('');
      setPasswordInput('');

      alert('E-mail ou senha incorretos.');
    }
  };

  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Log In</Text>
        <View style={styles.containerInput}>
          <Ionicons name="mail" size={32} color="black." />
          <TextInput
            style={styles.inputTexts}
            placeholder="Your e-mail"
            value={emailInput}
            onChangeText={(email) => setEmailInput(email)}
          />
        </View>
        <View style={styles.containerInput}>
          <Ionicons name="key" size={32} color="black." />
          <TextInput
            style={styles.inputTexts}
            secureTextEntry={true}
            placeholder="Password"
            value={passwordInput}
            onChangeText={(password) => setPasswordInput(password)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={fazerLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerForgot}>
          <Text
            style={styles.forgotButton}
            onPress={() => {
              alert('Redirecionando...');
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={styles.traco} />
        <View style={styles.containerOr}>
          <Text style={styles.textOr}>or</Text>
        </View>
        <View style={styles.socialLoginContainer}>
          <View style={styles.loginRedes}>
            <Image source={require('../../assets/googleicon.png')} />
            <Text>Google</Text>
          </View>
          <View style={styles.loginRedes}>
            <Image source={require('../../assets/facebookicon.png')} />
            <Text>Facebook</Text>
          </View>
        </View>
        <View style={styles.signUpContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0062FF',
    borderRadius: 15,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 47,
    shadowColor: '#000',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  main: {
    gap: 20,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    gap: 15,
    borderRadius: 4,
    borderColor: '#b9b6b6',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  containerForgot: {
    alignItems: 'flex-end',
  },

  forgotButton: {
    color: '#0062FF',
    fontSize: 15,
    fontWeight: '600',
  },
  traco: {
    borderWidth: 1,
    backgroundColor: '#b9b6b6',
  },
  containerOr: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: -33,
    backgroundColor: 'white',
    width: '10%',
  },
  textOr: {
    fontSize: 16,
  },
  inputTexts: {
    fontSize: 14,
    fontWeight: '500',
    width: 250,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
    justifyContent: 'center',
  },
  loginRedes: {
    flexDirection: 'row',
    gap: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 30,
    borderColor: '#b9b6b6',
  },
  signUpContainer: {
    flexDirection: 'row',
    gap: 7,
    fontSize: 24,
  },
  signUpText: {
    color: 'blue',
    fontWeight: '500',
  },
});
