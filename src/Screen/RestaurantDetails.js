import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import restaurants from "../../assets/data/restaurants.json";
import DishListItem from "../Components/DishListItem";
import Header from "./Header";

const restaurant = restaurants[0];

const RestaurantDetails = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        showsVerticalScrollIndicator={false}
        data={restaurant.dishes}
        renderItem={({ item, index }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
