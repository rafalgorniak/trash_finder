import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type ItemProps = {
  text: string;
  onDelete: () => void;
};

const ListItem = ({ text, onDelete }: ItemProps) => (
  <View style={styles.item}>
    <Text>{text}</Text>
    <TouchableOpacity onPress={onDelete}>
      <Text style={{ color: 'red' }}>Delete</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 4,
  }
});

export default ListItem;