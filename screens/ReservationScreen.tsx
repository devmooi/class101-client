import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

type StudyRoom = {
  room_id: string;
  name: string;
  location: string;
  image_url?: string;
};

type ReservationRouteProp = RouteProp<
  { Reservation: { room: StudyRoom } },
  "Reservation"
>;

type Props = {
  route: ReservationRouteProp;
};

const ReservationScreen = ({ route }: Props) => {
  const { room } = route.params;
  const navigation = useNavigation<any>();

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleReservation = async () => {
    const token = await AsyncStorage.getItem("token");

    if (!token) return;

    await axios.post(
      "http://192.168.45.93:3000/reservations",
      {
        room_id: room.room_id,
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    Alert.alert("예약이 완료되었습니다");

    navigation.navigate("Tabs", { screen: "내 예약" });
  };

  return (
    <View>
      <Text>예약 화면</Text>

      <Text>시작 시간</Text>
      <DateTimePicker
        value={startTime}
        mode="datetime"
        onChange={(_, date) => date && setStartTime(date)}
      />

      <Text>종료 시간</Text>
      <DateTimePicker
        value={endTime}
        mode="datetime"
        onChange={(_, date) => date && setEndTime(date)}
      />
      <Button title="예약하기" onPress={handleReservation} />
    </View>
  );
};

export default ReservationScreen;
