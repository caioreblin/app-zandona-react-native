import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Input;
