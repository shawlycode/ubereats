import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();
  const onPress = () => {
    return navigation.navigate("Restaurant");
  };

  return (
    <TouchableOpacity style={styles.restaurantsContainer} onPress={onPress}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <MaterialIcons
        name="favorite-outline"
        size={35}
        color="white"
        style={{ position: "absolute", top: 20, right: 15 }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.Subtitle}>
            &#x20B5;{restaurant.deliveryFee} &#xb7; {restaurant.minDeliveryTime}
            - {restaurant.maxDeliveryTime} Minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.Subtitle1}>{restaurant.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    borderRadius: 10,
  },
  restaurantsContainer: {
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  Subtitle: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
    marginBottom: 10,
  },
  Subtitle1: {
    fontSize: 16,
  },
  rating: {
    width: 35,
    height: 35,
    borderRadius: 40,
    backgroundColor: "#ff8500",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
});
