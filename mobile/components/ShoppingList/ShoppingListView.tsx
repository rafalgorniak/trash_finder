import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import InputArea from './InputArea';

const ShoppingListView = () => {
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);

  const addItem = (text: string) => {
    setItems([...items, { id: Date.now().toString(), text }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <View style={styles.screen}>
      <InputArea onAddItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem text={item.text} onDelete={() => removeItem(item.id)} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { padding: 50 }
});

export default ShoppingListView;