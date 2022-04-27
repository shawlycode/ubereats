import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const DishListItem = ({ dish }) => {
  return (
    <View>
      <View style={styles.cont}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.desc} numberOfLines={2}>
            {dish.description}
          </Text>
          <Text style={styles.price}> &#x20B5;{dish.price}</Text>
        </View>
        <View style={{ marginLeft: "auto" }}>
          {dish.image && (
            <Image source={{ uri: dish.image }} style={styles.image} />
          )}
        </View>
      </View>
    </View>
  );
};

export default DishListItem;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  menu: {
    marginVertical: 30,
    paddingHorizontal: 20,
    fontSize: 20,
    color: "grey",
    fontWeight: "bold",
  },
  image: {
    aspectRatio: 1,
    height: 70,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 10,
  },
  desc: {
    fontSize: 16,
    fontWeight: "400",
    color: "grey",
    paddingBottom: 10,
  },
});
