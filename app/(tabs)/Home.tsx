import { ScrollView, View, StyleSheet, Text } from "react-native";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import Banner from "../Components/Banner";
import BestsellerRow from "../Components/Products/BestSellers";
import CategoryGrid from "../Components/Catogory/CategoryGrid";

export default function Home() {
  return (
    <View style={styles.screen}>
      <Header />
      <SearchBar />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Special Offers</Text>
        <Banner />

        <Text style={styles.sectionTitle}>Categories</Text>
        <Text style={styles.subTitle}>Fresh meat just for you</Text>
        <CategoryGrid />

        <Text style={styles.title}>Bestseller</Text>
        <BestsellerRow />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    marginHorizontal: 16,
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    paddingHorizontal: 16,
    marginBottom: 6,
    marginTop: 10,
  },
  subTitle: {
    paddingHorizontal: 16,
    color: "#777",
    marginBottom: 12,
  },
});
