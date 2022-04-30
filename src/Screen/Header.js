import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import restaurants from "../../assets/data/restaurants.json";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const restaurant = restaurants[1];
const Header = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Image source={{ uri: restaurant.image }} style={styles.image} />
        <Pressable
          style={{ position: "absolute", top: 40, left: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-circle-sharp" size={50} color="white" />
        </Pressable>
      </View>
      <Text style={styles.title}>{restaurant.name}</Text>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 18, color: "grey", fontWeight: "bold" }}>
          &#x20B5;{restaurant.deliveryFee} &#xb7;
        </Text>
        <View style={{ marginLeft: 10, flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 16,
              paddingRight: 5,
              color: "grey",
              fontWeight: "bold",
            }}
          >
            {restaurant.rating}
          </Text>
          <FontAwesome name="star" size={18} color="#ff8500" />
        </View>
      </View>
      <View style={styles.separator}></View>
      <Text style={styles.menu}>Menu</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  separator: {
    borderWidth: 0.2,
    height: 1,
    marginTop: 20,
  },
  menu: {
    fontWeight: "bold",
    fontSize: 20,
    color: "gray",
    margin: 20,
  },
});
