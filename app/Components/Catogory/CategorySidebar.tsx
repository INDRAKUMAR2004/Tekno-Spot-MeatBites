import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CategorySidebar({
  categories,
  selected,
  onSelect,
}: any) {
  return (
    <View style={styles.container}>
      {categories.map((cat: any) => (
        <TouchableOpacity
          key={cat.id}
          style={[
            styles.item,
            selected === cat.id && styles.activeItem,
          ]}
          onPress={() => onSelect(cat.id)}
        >
          <Text style={styles.icon}>{cat.icon}</Text>
          <Text
            style={[
              styles.label,
              selected === cat.id && styles.activeText,
            ]}
          >
            {cat.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    paddingTop: 5,
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderColor: "#eee",
  },
  item: {
    alignItems: "center",
    paddingVertical: 14,
  },
  activeItem: {
    backgroundColor: "#fff",
    borderLeftWidth: 4,
    borderLeftColor: "#B32624",
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    textAlign: "center",
    color: "#555",
  },
  activeText: {
    color: "#B32624",
    fontWeight: "700",
  },
});
