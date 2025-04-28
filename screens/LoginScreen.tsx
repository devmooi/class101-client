import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { supabase } from "../lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // 로그인 실패
    if (error) return;

    const token = data.session.access_token;
    if (token) {
      AsyncStorage.setItem("token", token);
      navigation.replace("Tabs");
    }
  };
  return (
    <View>
      <TextInput placeholder="이메일" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="로그인" onPress={handleLogin} />
      <Button title="회원가입" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
};

export default LoginScreen;
