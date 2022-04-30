import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BasketDishItem from "../Components/BasketDishItem";
import DishDetailsScreen from "../Screen/DishDetailsScreen";
import Tabs from "../Navigation/BottomTabs/Tabs";
import RestaurantDetails from "../Screen/RestaurantDetails";
import OrderScreen from "../Screen/OrderScreen";
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={RestaurantDetails} />
        <Stack.Screen name="Dish" component={DishDetailsScreen} />
        <Stack.Screen name="BasketItem" component={BasketDishItem} />
        <Stack.Screen name="Orders" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
