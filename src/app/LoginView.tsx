import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo Aqui</Text>
      <Text style={styles.welcomeText}>Seja bem-vindo!</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" secureTextEntry={true} />
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        <Button title="Entrar" onPress={() => console.log('Botão pressionado')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: 'blue',
    marginBottom: 10,
  },
});

export default LoginScreen;