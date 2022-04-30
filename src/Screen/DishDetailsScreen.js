import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import restaurants from "../../assets/data/restaurants.json";
import { useNavigation } from "@react-navigation/native";
const dish = restaurants[1].dishes[2];

const DishDetailsScreen = () => {
  const navigation = useNavigation();
  const basket = () => {
    return navigation.navigate("BasketItem", { id: dish.id });
  };
  const [quantity, setQuantity] = useState(1);
  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };
  const onMinus = () => {
    if (quantity > 1) return setQuantity(quantity - 1);
  };
  const onPlus = () => {
    return setQuantity(quantity + 1);
  };
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={30}
        color="black"
        style={styles.icon}
        onPress={() => navigation.goBack()}
      />
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.desc}>{dish.description}</Text>
      </View>
      <View style={styles.btn}>
        <Feather
          name="minus-circle"
          size={50}
          color="#495057"
          onPress={onMinus}
        />
        <Text style={styles.qty}>{quantity}</Text>
        <Feather
          name="plus-circle"
          size={50}
          color="#495057"
          onPress={onPlus}
        />
      </View>
      <Pressable style={styles.button} onPress={basket}>
        <Text style={styles.text}>
          Add {quantity} to basket &#xb7; &#xa0; &#x20B5; {getTotal()}
        </Text>
      </Pressable>
    </View>
  );
};

export default DishDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 300,
    marginBottom: 30,
  },
  name: {
    fontSize: 30,
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
    fontWeight: "bold",
  },
});
