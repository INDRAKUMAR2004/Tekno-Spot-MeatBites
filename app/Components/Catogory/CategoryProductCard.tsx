import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoryProductCard({ item }: any) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.weight}>{item.weight}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹{item.price}</Text>
          {item.oldPrice && (
            <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
          )}
        </View>

        {item.elite && <Text style={styles.elite}>ELITE</Text>}
      </View>

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 14,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    marginTop: 30
  },
  image: {
    width: "100%",
    height: 120,
    alignSelf: "center"
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  weight: {
    color: "#777",
    fontSize: 12,
    marginVertical: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "800",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  elite: {
    marginTop: 4,
    color: "#2E7D32",
    fontWeight: "700",
  },
  addBtn: {
    position: "absolute",
    right: 12,
    bottom: 12,
    backgroundColor: "#B32624",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  addText: {
    color: "#fff",
    fontWeight: "700",
  },
});
