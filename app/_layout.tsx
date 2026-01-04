import { CartProvider } from "@/context/CartContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
  <CartProvider>
  <StatusBar style="dark" />
  <Stack screenOptions={{headerShown: false}} />
  </CartProvider> );
}
