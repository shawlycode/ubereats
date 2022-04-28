import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const OrderListItem = ({ order }) => {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 8,
          marginHorizontal: 10,
        }}
      />
      <View>
        <Text style={{ fontWeight: "500", fontSize: 19 }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ fontSize: 16, marginVertical: 5 }}>
          2 Items &#xb7; &#x20B5;{order.Restaurant.deliveryFee}
        </Text>
        <Text style={{ fontSize: 16, color: "grey" }}>
          3 days ago &#xb7; {order.status}
        </Text>
      </View>
    </View>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({});
