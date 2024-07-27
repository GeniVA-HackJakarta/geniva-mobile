import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import RegularInput from "@/components/auth/RegularInput";
import PasswordInput from "@/components/auth/PasswordInput";
import { SafeAreaView } from "react-native-safe-area-context";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const [isValid, setIsValid] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (text == "") {
      setEmailError("Email tidak boleh kosong");
      setIsValid(false);
    } else {
      setEmailError("");
    }

    if (text !== "" && password !== "") {
      setIsValid(true);
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (text == "") {
      setPasswordError("Email tidak boleh kosong");
      setIsValid(false);
    } else {
      setPasswordError("");
    }

    if (text !== "" && email !== "") {
      setIsValid(true);
    }
  };

  const handleLogin = () => {
    console.log("login");
    router.push("/main");
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 items-center bg-white px-[5%]">
        <Text className="text-3xl font-bold text-[#00B14F] mt-[25%]">
          Login
        </Text>
        <View className="w-full mt-2">
          <RegularInput
            title="Email/No. Handphone"
            value={email}
            handleValue={handleEmailChange}
            valueError={emailError}
          />
        </View>
        <PasswordInput
          title="Password"
          value={password}
          handleValue={handlePasswordChange}
          valueError={passwordError}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Text className="text-black font-semibold self-end mt-2">
          Lupa password?
        </Text>
        <View className="overflow-hidden rounded-full w-full mt-8">
          <Pressable
            className={`${isValid ? "bg-[#00B24F]" : "bg-[#747474]"} py-3`}
            android_ripple={{ color: isValid ? "#00802D" : "#747474" }}
            disabled={!isValid}
            onPress={() => handleLogin()}
          >
            <Text className="text-white text-center text-base font-semibold">
              Login
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex-row justify-center items-center mt-4">
          <Text>Belum punya akun?</Text>
          <Link className="text-[#00B24F] ml-1" href={"register"}>
            Register
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
};

export default index;
