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
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
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
            size={20}
            color="#FFD700"
            style={styles.star}
          />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <Ionicons
            key={i}
            name="star-half"
            size={20}
            color="#FFD700"
            style={styles.star}
          />
        );
      } else {
        stars.push(
          <Ionicons
            key={i}
            name="star-outline"
            size={20}
            color="#666"
            style={styles.star}
          />
        );
      }
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <TouchableOpacity
          style={styles.wishlistButton}
          onPress={handleWishlistToggle}
        >
          <Ionicons
            name={isInWishlist ? "heart" : "heart-outline"}
            size={28}
            color={isInWishlist ? "#FF3B30" : "#666"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>₹{product.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{product.rating}</Text>
          <View style={styles.starsContainer}>
            {renderStars(product.rating)}
          </View>
          <Text style={styles.reviews}>({product.reviews} reviews)</Text>
        </View>
        <Text style={styles.description}>
          This is a detailed description of the product. It includes information
          about the plant, care instructions, and any other relevant details.
        </Text>
        <View style={styles.actionButtonsContainer}>
          {quantityInCart > 0 ? (
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handleRemoveFromCart}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantityInCart}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handleAddToCart}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={[styles.actionButton, styles.addToCartButton]}
              onPress={handleAddToCart}
            >
              <Text style={styles.actionButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={[styles.actionButton, styles.buyNowButton]}>
            <Text style={styles.actionButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 300,
  },
  wishlistButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  info: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: "#007AFF",
    fontWeight: "bold",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  starsContainer: {
    flexDirection: "row",
    marginRight: 10,
  },
  star: {
    marginRight: 2,
  },
  reviews: {
    fontSize: 14,
    color: "#666",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 20,
  },
  quantityControls: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  quantityButton: {
    backgroundColor: "#007AFF",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    minWidth: 30,
    textAlign: "center",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    height: 50,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  addToCartButton: {
    backgroundColor: "#007AFF",
  },
  buyNowButton: {
    backgroundColor: "#34C759",
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
