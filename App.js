import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DishDetailsScreen from "./src/Screen/DishDetailsScreen";
import HomeScreen from "./src/Screen/HomeScreen";
import RestaurantDetails from "./src/Screen/RestaurantDetails";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetails /> */}
      <DishDetailsScreen />
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
