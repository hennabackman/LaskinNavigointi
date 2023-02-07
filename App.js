import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Calculator = ({ navigation }) => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [results, setResults] = useState([]);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    const firstNum = parseFloat(firstNumber);
    const secondNum = parseFloat(secondNumber);

    if (operation === '+') {
      setResult(firstNum + secondNum);
    } else {
      setResult(firstNum - secondNum);
    }

    setResults([...results, `${firstNumber} ${operation} ${secondNumber} = ${result}`]);
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>Result: {result}</Text>
      <TextInput
        keyboardType="numeric"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setFirstNumber(text)}
        value={firstNumber}
      />
      <TextInput
        keyboardType="numeric"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 8 }}
        onChangeText={text => setSecondNumber(text)}
        value={secondNumber}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 }}>
        <Button title="+" onPress={() => setOperation('+')} />
        <Button title="-" onPress={() => setOperation('-')} />
      </View>
      <Button title="Calculate" onPress={handleSubmit} />
      <Button
        title="History"
        onPress={() => navigation.navigate('History', { results })}
        style={{ marginTop: 8 }}
      />
    </View>
  );
};

const History = ({ route }) => {
  const { results } = route.params;

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={results.map((result, index) => ({ key: `${index + 1}. ${result}` }))}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Calculator" component={Calculator} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
