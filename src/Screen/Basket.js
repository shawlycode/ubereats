import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../assets/data/restaurants.json";
import BasketDishItem from "../Components/BasketDishItem";

const restaurant = restaurants[0];

const Basket = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={30} color="black" style={styles.icon} />
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.name}>{restaurant.name}</Text>
      </View>
      <Text
        style={{
          fontWeight: "500",
          fontSize: 20,
          color: "grey",
          marginVertical: 15,
        }}
      >
        Your Items
      </Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <View style={styles.button}>
        <Text style={styles.text}>Create Order</Text>
      </View>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  icon: {
    marginRight: 300,
    marginBottom: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  desc: {
    fontSize: 16,
    color: "gray",
    fontWeight: "600",
    lineHeight: 20,
  },
  btn: {
    marginVertical: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  qty: {
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: "600",
    color: "grey",
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#000",
    width: 400,
    height: 60,
    marginBottom: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
});
