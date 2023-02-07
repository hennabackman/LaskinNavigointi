import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Calculator = ({ navigation }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    setResult(Number(input1) + Number(input2));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={text => setInput1(text)}
        value={input1}
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={text => setInput2(text)}
        value={input2}
      />
      <Button title="+" onPress={handleAddition} />
      <Text>Result: {result}</Text>
      <Button
        title="Go to History"
        onPress={() => navigation.navigate('History')}
      />
    </View>
  );
};

export default Calculator;
