import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";

type StudyRoom = {
  room_id: string;
  name: string;
  location: string;
  image_url?: string;
};

const RoomListScreen = () => {
  const navigation = useNavigation<any>();
  const [rooms, setRooms] = useState<StudyRoom[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await axios.get("http://192.168.45.93:3000/study-rooms");
      setRooms(response.data);
    };
    fetchRooms();
  }, []);
  return (
    <FlatList
      data={rooms}
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("RoomDetail", { room: item })}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default RoomListScreen;
