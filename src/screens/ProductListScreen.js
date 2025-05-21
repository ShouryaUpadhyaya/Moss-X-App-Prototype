import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("price");
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      const userImages = data.results.map((user) => user.picture.large);

      const mockProducts = [
        {
          id: "1",
          title: "Monstera Deliciosa",
          price: 1299,
          rating: 4.5,
          reviews: 128,
          image: userImages[0],
        },
        {
          id: "2",
          title: "Snake Plant",
          price: 899,
          rating: 4.2,
          reviews: 95,
          image: userImages[1],
        },
        {
          id: "3",
          title: "Peace Lily",
          price: 799,
          rating: 4.8,
          reviews: 156,
          image: userImages[2],
        },
        {
          id: "4",
          title: "Fiddle Leaf Fig",
          price: 1499,
          rating: 4.3,
          reviews: 112,
          image: userImages[3],
        },
        {
          id: "5",
          title: "ZZ Plant",
          price: 999,
          rating: 4.6,
          reviews: 89,
          image: userImages[4],
        },
      ];

      setProducts(mockProducts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const sortProducts = (products) => {
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        case "popularity":
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Ionicons
            key={i}
            name="star"
            size={14}
            color="#FFD700"
            style={styles.star}
          />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <Ionicons
            key={i}
            name="star-half"
            size={14}
            color="#FFD700"
            style={styles.star}
          />
        );
      } else {
        stars.push(
          <Ionicons
            key={i}
            name="star-outline"
            size={14}
            color="#666"
            style={styles.star}
          />
        );
      }
    }
    return stars;
  };

  const renderProductItem = ({ item }) => {
    const isInWishlist = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === item.id
    );

    return (
      <TouchableOpacity
        style={styles.productCard}
        onPress={() => navigation.navigate("ProductDetail", { product: item })}
      >
        <View style={styles.productCardContent}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{item.rating}</Text>
              <View style={styles.starsContainer}>
                {renderStars(item.rating)}
              </View>
              <Text style={styles.reviews}>({item.reviews})</Text>
            </View>
            <Text style={styles.itemsSold}>{item.reviews} items sold</Text>
            <Text style={styles.productPrice}>₹{item.price}</Text>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => dispatch(addToCart(item))}
            >
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === "price" && styles.activeSortButton,
          ]}
          onPress={() => setSortBy("price")}
        >
          <Text
            style={[
              styles.sortButtonText,
              sortBy === "price" && styles.activeSortButtonText,
            ]}
          >
            Price
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === "rating" && styles.activeSortButton,
          ]}
          onPress={() => setSortBy("rating")}
        >
          <Text
            style={[
              styles.sortButtonText,
              sortBy === "rating" && styles.activeSortButtonText,
            ]}
          >
            Rating
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === "popularity" && styles.activeSortButton,
          ]}
          onPress={() => setSortBy("popularity")}
        >
          <Text
            style={[
              styles.sortButtonText,
              sortBy === "popularity" && styles.activeSortButtonText,
            ]}
          >
            Popularity
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sortProducts(products)}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sortContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sortButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
  },
  activeSortButton: {
    backgroundColor: "#007AFF",
  },
  sortButtonText: {
    color: "#666",
    fontWeight: "bold",
  },
  activeSortButtonText: {
    color: "white",
  },
  productList: {
    padding: 10,
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productCardContent: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "bold",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 5,
  },
  starsContainer: {
    flexDirection: "row",
    marginRight: 5,
  },
  star: {
    marginRight: 1,
  },
  reviews: {
    fontSize: 12,
    color: "#666",
  },
  itemsSold: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  addToCartButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductListScreen;
