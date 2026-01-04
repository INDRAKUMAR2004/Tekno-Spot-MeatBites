import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useCart } from "../../context/CartContext";
import { Feather } from "@expo/vector-icons";
import {Button} from "react-native-paper"
import { router } from "expo-router";

export default function Cart() {
  const { items, increaseQty, decreaseQty, total } = useCart();

  if (items.length === 0) {
    return (
      <View style={styles.center}>
        <Feather name="shopping-cart" size={100} color={"#bbb"} style={{alignSelf:"center"}} />
        <Text style={styles.empty}>Your cart is empty</Text>
        <Button mode="contained" style={{marginTop: 20, backgroundColor: "#B32624"}} onPress={() => router.push("/(tabs)/Home")}>Continue Shopping</Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>₹{item.price}</Text>
            </View>

            <View style={styles.qtyRow}>
              <TouchableOpacity onPress={() => decreaseQty(item.id)}>
                <Text style={styles.qtyBtn}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qty}>{item.qty}</Text>

              <TouchableOpacity onPress={() => increaseQty(item.id)}>
                <Text style={styles.qtyBtn}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>Total: ₹{total}</Text>
        <TouchableOpacity style={styles.checkout}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7ED",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  price: {
    color: "#666",
    marginTop: 4,
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  qtyBtn: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 12,
  },
  qty: {
    fontWeight: "600",
    fontSize: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 12,
  },
  total: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  checkout: {
    backgroundColor: "#B32624",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    fontSize: 20,
    color: "#777",
    alignSelf: "center"
  },
});
