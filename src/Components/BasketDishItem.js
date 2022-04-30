import { StyleSheet, Text, View } from "react-native";
const BasketDishItem = ({ basketDish }) => {
  return (
    <View>
      <View style={styles.qtyContainer}>
        <Text style={styles.num}>1</Text>
        <Text style={{ fontWeight: "600", fontSize: 19 }}>
          {basketDish?.name}
        </Text>
        <Text style={{ marginLeft: "auto", fontSize: 18 }}>
          &#x20B5; {basketDish?.price}
        </Text>
      </View>
    </View>
  );
};
export default BasketDishItem;
const styles = StyleSheet.create({
  qtyContainer: {
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 10,
  },
  num: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    textAlign: "center",
    marginRight: 10,
    color: "#fff",
    fontSize: 18,
  },
});
