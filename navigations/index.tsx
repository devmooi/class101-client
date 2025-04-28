import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import RoomListScreen from "../screens/RoomListScreen";
import RoomDetailScreen from "../screens/RoomDetailScreen";
import ReservationScreen from "../screens/ReservationScreen";
import MyReservationScreen from "../screens/MyReservationScreen";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      setIsLoggedIn(!!token);
      setIsLoading(false);
    };
    checkToken();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>로딩 중...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Tabs" : "Login"}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="RoomList" component={RoomListScreen} />
        <Stack.Screen
          name="RoomDetail"
          component={RoomDetailScreen}
          options={{ headerBackTitle: "RoomList" }}
        />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
        <Stack.Screen name="MyReservation" component={MyReservationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
