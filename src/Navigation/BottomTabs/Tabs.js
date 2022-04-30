import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screen/HomeScreen";
import { Foundation } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={40} color={color} />
          ),
          // tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="graph-trend" size={40} color={color} />
          ),
          // tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
