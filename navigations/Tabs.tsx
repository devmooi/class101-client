import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RoomListScreen from "../screens/RoomListScreen";
import MyReservationScreen from "../screens/MyReservationScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="스터디룸">
      <Tab.Screen name="스터디룸" component={RoomListScreen} />
      <Tab.Screen name="내 예약" component={MyReservationScreen} />
    </Tab.Navigator>
  );
};
export default Tabs;
