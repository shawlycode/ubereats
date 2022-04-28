import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import orders from "../../assets/data/orders.json";
import restaurants from "../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import BasketDishItem from "../Components/BasketDishItem";

const order = orders[0];
const OrderDetailsHeader = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text style={styles.status}>{order.status} &#xb7; 2 days ago</Text>
      </View>

      <Text style={styles.menu}>Your Orders</Text>
      <StatusBar barStyle="light-content" />
    </View>
  );
};
const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    borderWidth: 0.2,
    height: 1,
    marginTop: 20,
  },
  menu: {
    fontWeight: "bold",
    fontSize: 28,
    margin: 10,
  },
  status: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "600",
    color: "grey",
  },
});
