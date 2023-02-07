import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const History = ({ navigation }) => {
  const [history, setHistory] = useState([]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={history}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.result}</Text>}
      />
      <Button
        title="Go back to Calculator"
        onPress={() => navigation.navigate('Calculator')}
      />
    </View>
  );
};

export default History;
