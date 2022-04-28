import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import RestaurantItem from "../Components/RestaurantItem";
import restaurants from "../../assets/data/restaurants.json";

const HomeScreen = () => {
  return (
    <View style={{ marginHorizontal: 10, paddingTop: 40 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
