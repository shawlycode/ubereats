import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import OrderListItem from "./OrderListItem";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();
  const onPress = () => {
    return navigation.navigate("Dish");
  };
  return (
    <View>
      <Pressable style={styles.cont} onPress={onPress}>
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
      </Pressable>
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
