import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const InputArea = ({ onAddItem }: { onAddItem: (text: string) => void }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAddItem(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        value={text} 
        onChangeText={setText} 
        placeholder="Add new item..." 
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderBottomWidth: 1, marginRight: 10 }
});

export default InputArea;