import { StyleSheet, Text, View, FlatList } from "react-native";
import orders from "../../assets/data/orders.json";
import OrderListItem from "../Components/OrderListItem";

const OrderScreen = () => {
  return (
    <View style={{ flex: 1, width: "100%", paddingTop: 50 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 20,
        }}
      >
        Your Orders
      </Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
