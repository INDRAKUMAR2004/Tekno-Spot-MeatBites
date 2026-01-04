import { ActivityIndicator, Text, View } from "react-native";
import TabsLayout from "./(tabs)/_layout";
import { Redirect, router } from "expo-router";

export default function Index() {
  return (
   <Redirect href={"/(tabs)/Home"} /> 
  );
}
