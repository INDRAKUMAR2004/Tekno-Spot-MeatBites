import { FlatList, Image, StyleSheet, View } from "react-native";
import { useState } from "react";

const BANNERS = [
  require("../../assets/images/appbanner.jpg"),
  require("../../assets/images/appbanner.jpg"),
  require("../../assets/images/appbanner.jpg"),
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <FlatList
        data={BANNERS}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        onMomentumScrollEnd={(e) => {
          const i = Math.round(
            e.nativeEvent.contentOffset.x /
              e.nativeEvent.layoutMeasurement.width
          );
          setIndex(i);
        }}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={styles.banner}
            resizeMode="cover"
          />
        )}
      />

      <View style={styles.dots}>
        {BANNERS.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              index === i && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: 340,
    height: 180,
    marginHorizontal: 10,
    borderRadius: 18,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#B32624",
  },
});
