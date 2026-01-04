import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color="#B32624" />
      <TextInput
        placeholder="Search meat, cuts, combos…"
        style={styles.input}
        placeholderTextColor="#B32624"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    marginTop: 10
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
  },
});
