import { View, StyleSheet, Text } from 'react-native';
import ShoppingListView from '../components/ShoppingList/ShoppingListView';
import ThemedView from '../components/ThemedView';

const ShopList = () => {
  return (
    <ThemedView style={styles.page}>
      <Text style={styles.header}>Moja Lista Zakupów</Text>
    
      <View style={styles.listWrapper}>
        <ShoppingListView />
      </View>
      
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold'
  },
  listWrapper: {
    flex: 1,
  }
});

export default ShopList;