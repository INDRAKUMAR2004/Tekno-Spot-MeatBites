import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Profile</Text>

      {/* User Card */}
      <View style={styles.userCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={32} color="#fff" />
        </View>

        <View>
          <Text style={styles.name}>Indrakumar</Text>
          <Text style={styles.sub}>+91 98765 43210</Text>
        </View>
      </View>

      {/* Menu */}
      <View style={styles.section}>
        <ProfileItem icon="receipt-outline" label="My Orders" />
        <ProfileItem icon="location-outline" label="Saved Addresses" />
        <ProfileItem icon="help-circle-outline" label="Help & Support" />
        <ProfileItem icon="information-circle-outline" label="About MeatBites" />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logout}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ProfileItem({
  icon,
  label,
}: {
  icon: any;
  label: string;
}) {
  return (
    <TouchableOpacity style={styles.item}>
      <Ionicons name={icon} size={22} color="#444" />
      <Text style={styles.itemText}>{label}</Text>
      <Ionicons name="chevron-forward" size={18} color="#999" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 50
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },

  userCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: "#B32624",
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
  },
  sub: {
    color: "#666",
    marginTop: 2,
  },

  section: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 6,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  itemText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "500",
  },

  logout: {
    marginTop: 30,
    backgroundColor: "#b32624",
    padding: 14,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});
