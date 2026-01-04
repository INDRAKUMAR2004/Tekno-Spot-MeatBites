import { FlatList, View, Text, StyleSheet } from "react-native";

const BESTSELLERS = [
  { id: "1", name: "Chicken Curry Cut", price: "₹220" },
  { id: "2", name: "Mutton Boneless", price: "₹480" },
  { id: "3", name: "Fresh Fish", price: "₹320" },
];

export default function BestsellerRow() {
  if (BESTSELLERS.length === 0) {
    return (
      <Text style={styles.empty}>
        No Best Seller Products Found
      </Text>
    );
  }

  return (
    <FlatList
      data={BESTSELLERS}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 12,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "#fff",
    elevation: 3,
    marginBottom: 20
  },
  name: {
    fontWeight: "700",
    marginBottom: 6,
  },
  price: {
    color: "#B32624",
    fontWeight: "600",
  },
  empty: {
    textAlign: "center",
    marginVertical: 20,
    color: "#777",
  },
});
