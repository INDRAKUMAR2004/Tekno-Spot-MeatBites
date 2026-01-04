import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="location-outline" size={22} color="#B32624" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.addressBox}>
        <Text style={styles.small}>Delivering to</Text>
        <Text style={styles.address} numberOfLines={1}>
          A1, B Block Rd, Sector 63
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={22} color="#B32624" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    zIndex: 300,
  },
  addressBox: {
    flex: 1,
    marginHorizontal: 12,
  },
  small: {
    fontSize: 12,
    color: "#777",
  },
  address: {
    fontSize: 16,
    fontWeight: "700",
  },
});
