import { View, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import CategorySidebar from "../Components/Catogory/CategorySidebar";
import CategoryProductCard from "../Components/Catogory/CategoryProductCard";
import { CATEGORIES } from "../constants/categories";
import { PRODUCTS } from "../constants/products";
import { useLocalSearchParams } from "expo-router";

export default function Category() {
  const params = useLocalSearchParams();
  const initialCategory =
    typeof params.category === "string"
      ? params.category
      : "prebook";

  const [selected, setSelected] = useState(initialCategory);

  // 🔁 Update when coming from Home again
  useEffect(() => {
    if (params.category && typeof params.category === "string") {
      setSelected(params.category);
    }
  }, [params.category]);


  const filtered = PRODUCTS.filter(
    (p) => p.category === selected
  );

  return (
    <View style={styles.screen}>
      <CategorySidebar
        categories={CATEGORIES}
        selected={selected}
        onSelect={setSelected}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryProductCard item={item} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  list: {
    padding: 16,
    paddingBottom: 120,
  },
});
