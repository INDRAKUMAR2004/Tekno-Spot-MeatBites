import { Feather, Fontisto, Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false, tabBarActiveTintColor: "#B32624",
            tabBarInactiveTintColor: "#000",
            tabBarStyle: {
                backgroundColor: "#fff",
                borderTopColor: "#eee",
                height: Platform.OS === "ios" ? 85 : 65,
                paddingBottom: Platform.OS === "ios" ? 25 : 10,
                paddingTop: 5,
            },
            tabBarLabelStyle: {
                fontWeight: "800",
                fontSize: 12,
            },
        }}>
            <Tabs.Screen name='Home' options={{
                title: "Home",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="home" size={24} color={color} />
                ),
            }} />
            <Tabs.Screen name='Categories' options={{
                title: "Categories",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="food-turkey" size={24} color={color} />
                ),
            }} />
            <Tabs.Screen name='Cart' options={{
                title: "Cart",
                tabBarIcon: ({ color }) => (
                    <Feather name="shopping-bag" size={24} color={color} />
                ),
            }} />
            <Tabs.Screen name='Profile' options={{
                title: "Profile",
                tabBarIcon: ({ color }) => (
                    <Fontisto name="person" size={24} color={color} />
                ),
            }} />
        </Tabs>
    )
}