import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Moss X</Text>
        <Text style={styles.subtitle}>
          Your one-stop shop for all things plants!
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Use This App?</Text>
        <Text style={styles.text}>
          Discover a wide variety of plants, from indoor to outdoor, and learn
          how to care for them. Our app provides detailed information, care
          tips, and a community of plant lovers to help you on your journey.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How to Use This App</Text>
        <Text style={styles.text}>
          1. Browse through our product list to find the perfect plant for your
          home or garden.{"\n"}
          2. Read detailed descriptions and care instructions for each plant.
          {"\n"}
          3. Add your favorite plants to your wishlist or cart for easy access.
          {"\n"}
          4. Check out our plant dashboard for personalized care tips and
          reminders.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/v2/D5603AQHQo_BEbCYZRg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730223388262?e=1753315200&v=beta&t=knYjeUSm8h80NO47Z-3JQEsk4fEzM5rQiHfTKt2PlMg",
          }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    backgroundColor: "#007AFF",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },
  section: {
    padding: 20,
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007AFF",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});

export default HomeScreen;
