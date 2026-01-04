import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const CATEGORIES = [
  { id: "chicken", name: "Chicken", img: "🍗" },
  { id: "mutton", name: "Mutton", img: "🥩" },
  { id: "fish", name: "Fish", img: "🐟" },
  { id: "eggs", name: "Eggs", img: "🥚" },
  { id: "crab", name: "Crab", img: "🦀" },
];

export default function CategoryGrid() {
  const router = useRouter();

  const handleCategoryPress = (categoryId: string) => {
    router.push({
      pathname: "/(tabs)/Categories",
      params: { category: categoryId },
    });
  };

  return (
    <View style={styles.grid}>
      {CATEGORIES.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => handleCategoryPress(item.id)}
        >
          <Text style={styles.emoji}>{item.img}</Text>
          <Text style={styles.label}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    width: "30%",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#B32624",
    paddingVertical: 14,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  emoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  label: {
    fontWeight: "600",
  },
});
