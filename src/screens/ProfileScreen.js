import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";

const ProfileScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const menuItems = [
    {
      title: "My Orders",
      icon: "cart-outline",
      onPress: () => navigation.navigate("Orders"),
    },
    {
      title: "Wishlist",
      icon: "heart-outline",
      badge: wishlistItems.length,
      onPress: () => navigation.navigate("Wishlist"),
    },
    {
      title: "Cart",
      icon: "basket-outline",
      badge: cartItems.length,
      onPress: () => navigation.navigate("Cart"),
    },
    {
      title: "Addresses",
      icon: "location-outline",
      onPress: () => navigation.navigate("Addresses"),
    },
    {
      title: "Payment Methods",
      icon: "card-outline",
      onPress: () => navigation.navigate("PaymentMethods"),
    },
    {
      title: "Settings",
      icon: "settings-outline",
      onPress: () => navigation.navigate("Settings"),
    },
    {
      title: "Help & Support",
      icon: "help-circle-outline",
      onPress: () => navigation.navigate("Support"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: "https://media.licdn.com/dms/image/v2/D5603AQHQo_BEbCYZRg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730223388262?e=1753315200&v=beta&t=knYjeUSm8h80NO47Z-3JQEsk4fEzM5rQiHfTKt2PlMg",
            }}
            style={styles.profileImage}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Akshaj Khetarpal </Text>
            <Text style={styles.userEmail}>randomName@example.com</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Ionicons name="pencil" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{cartItems.length}</Text>
          <Text style={styles.statLabel}>Cart Items</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{wishlistItems.length}</Text>
          <Text style={styles.statLabel}>Wishlist</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Orders</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons name={item.icon} size={24} color="#333" />
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
            <View style={styles.menuItemRight}>
              {item.badge > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  editButton: {
    padding: 10,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    marginTop: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#eee",
  },
  menuContainer: {
    backgroundColor: "white",
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },
  menuItemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 10,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 30,
    padding: 15,
  },
  logoutText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default ProfileScreen;
