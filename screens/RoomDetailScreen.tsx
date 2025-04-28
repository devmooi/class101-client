import { RouteProp, useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

type StudyRoom = {
  room_id: string;
  name: string;
  location: string;
  image_url?: string;
};

type RoomDetailRouteProp = RouteProp<
  { RoomDetail: { room: StudyRoom } },
  "RoomDetail"
>;

type Props = {
  route: RoomDetailRouteProp;
};

const RoomDetailScreen = ({ route }: Props) => {
  const { room } = route.params;
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>스터디룸 상세 화면</Text>
      <Text>{room.name}</Text>
      <Text>{room.location}</Text>
      <Text>{room.image_url}</Text>
      <Button
        title="예약하기"
        onPress={() => navigation.navigate("Reservation", { room })}
      />
    </View>
  );
};

export default RoomDetailScreen;
