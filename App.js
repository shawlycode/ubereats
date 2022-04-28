import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DishDetailsScreen from "./src/Screen/DishDetailsScreen";
import HomeScreen from "./src/Screen/HomeScreen";
import RestaurantDetails from "./src/Screen/RestaurantDetails";
import Basket from "./src/Screen/Basket";
import OrderScreen from "./src/Screen/OrderScreen";
import OrderDetails from "./src/Screen/OrderDetails";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetails /> */}
      {/* <DishDetailsScreen /> */}
      {/* <Basket /> */}
      {/* <OrderScreen /> */}
      <OrderDetails />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
