import React from 'react';
import { View, Text, Image } from 'react-native';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Styles from './styles';

const Login: React.FC = () => {
  return (
    <View style={Styles.container}>
      <Image source={require('../../../assets/logo-super-ducha.jpeg')} style={Styles.logo} resizeMode="contain" />
      <Text style={Styles.loginText}>Seja bem-vindo!</Text>
      <View style={Styles.inputContainer}>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" secureTextEntry={true} />
        <Text style={Styles.forgotPassword}>Esqueceu sua senha?</Text>
        <Button title="Entrar" onPress={() => console.log('Botão pressionado')} />
      </View>
    </View>
  );
};

export default Login;