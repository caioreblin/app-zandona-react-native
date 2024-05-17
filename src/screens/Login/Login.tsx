import React from 'react';
import { View, Text, Image } from 'react-native';
import { styled } from 'nativewind';
import Input from '@/components/Input'; // Supondo que você tenha um componente Input
import Button from '@/components/Button'; // Supondo que você tenha um componente Button

const Login: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Image source={require('../../../assets/logo-super-ducha.jpeg')} className="w-40 h-40 mb-6" resizeMode="contain" />
      <Text className="text-lg font-bold mb-6 text-center text-blue-900">Seja bem-vindo!</Text>
      <View className="w-full items-center">
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" secureTextEntry={true} />
        <Text className="self-end mt-2 mb-6 text-right text-sm text-gray-600">Esqueceu sua senha?</Text>
        <Button title="Entrar" />
      </View>
      <Text className="mt-6 text-center text-sm">
        Não possui uma conta? <Text className="text-red-600">Cadastre-se</Text>
      </Text>
    </View>
  );
};

export default Login;