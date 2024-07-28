import { View, Text, Pressable, TextInput, Alert } from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import RegularInput from "@/components/auth/RegularInput";
import PasswordInput from "@/components/auth/PasswordInput";
import { SafeAreaView } from "react-native-safe-area-context";
import axios, { AxiosError } from "axios";
import baseURL from "@/static/api/api";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface RegisterError {
  error: string;
  success: boolean;
}

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const [isValid, setIsValid] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const [loadingToken, setLoadingToken] = React.useState(false);

  React.useEffect(() => {
    const checkToken = async () => {
      setLoadingToken(true);
      const userToken = await AsyncStorage.getItem("geniva_user_token");
      if (userToken) {
        router.push("/main");
      }
      setLoadingToken(false);
    };
    checkToken();
  }, []);

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
      setPasswordError("Password tidak boleh kosong");
      setIsValid(false);
    } else {
      setPasswordError("");
    }

    if (text !== "" && email !== "") {
      setIsValid(true);
    }
  };

  const handleLogin = async () => {
    const formData = {
      email: email,
      password: password,
    };
    try {
      setLoading(true);
      const response = await axios.post(`${baseURL}/auth/login`, formData);
      console.log(response.data);
      if (response.data.success) {
        AsyncStorage.setItem("geniva_user_id", String(response.data.id));
        AsyncStorage.setItem("geniva_user_token", response.data.token);
        router.push("/kyc/question1");
      } else {
        Alert.alert("Error", response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<RegisterError>;
        if (axiosError.response?.data) {
          // This is your custom error response
          const errorData = axiosError.response.data;
          Alert.alert("Error", errorData.error);
        } else {
          // This is a network error or another type of error
          Alert.alert("Error", "An unexpected error occurred");
        }
      } else {
        // This is not an Axios error
        Alert.alert("Error", "An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      {loadingToken ? (
        <View className="flex-1 w-full items-center justify-center">
          <ActivityIndicator
            size="large"
            color="#00B14F"
            className="flex-1 items-center justify-center"
          />
        </View>
      ) : (
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
            placeholder="Masukan password"
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
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text className="text-white text-center text-base font-semibold">
                  Login
                </Text>
              )}
            </Pressable>
          </View>
          <View className="w-full flex-row justify-center items-center mt-4">
            <Text>Belum punya akun?</Text>
            <Link className="text-[#00B24F] ml-1" href={"register"}>
              Register
            </Link>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default index;

//===================================================================

// import {
//   View,
//   Text,
//   Image,
//   Pressable,
//   ScrollView,
//   TextInput,
//   Alert,
// } from "react-native";
// import React from "react";
// import { router, Stack } from "expo-router";
// import { Icon } from "react-native-paper";
// import CHATBOT_IMAGES from "@/static/image/chatbot";
// import { SafeAreaView } from "react-native-safe-area-context";
// import ChatBotHeader from "@/components/chatbot/ChatBotHeader";
// import InitialGeniVATemplate from "@/components/chatbot/InitialGeniVATemplate";
// import UserMessage from "@/components/chatbot/UserMessage";
// import * as ImagePicker from "expo-image-picker";
// import { resolveScheme } from "expo-linking";
// import GeniVAMessage from "@/components/chatbot/GeniVAMessage";

// interface conversation {
//   sender: string; // geniva | user
//   message: string;
//   image: string;
//   description: string;
//   loading: boolean;
// }

// interface indexProps {}

// const index: React.FC<indexProps> = () => {
//   const [images, setImages] = React.useState<string[]>([]);
//   const [newImage, setNewImage] = React.useState<string>("");

//   const [messages, setMessages] = React.useState<any[]>([]);
//   const [newMessages, setNewMessages] = React.useState<string>("");

//   const [conversations, setConversations] = React.useState<conversation[]>([]);

//   const [loading, setLoading] = React.useState<boolean>(false);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (result.assets !== null && result.assets.length > 0) {
//       setNewImage(result.assets[0].uri);
//     }

//     console.log(images);
//   };

//   const handleSend = async () => {
//     setLoading(true);
//     const formData = new FormData();
//     let newConversationItems = [];
//     if (newImage !== "") {
//       formData.append("file", {
//         uri: newImage,
//         type: "image/jpeg",
//         name: "photo.jpg",
//       } as any);

//       newConversationItems.push({
//         sender: "user",
//         message: "",
//         image: newImage,
//         description: "",
//         loading: false,
//       });
//     }
//     if (newMessages !== "") {
//       formData.append("query", newMessages);
//       newConversationItems.push({
//         sender: "user",
//         message: newMessages,
//         image: "",
//         description: "",
//         loading: false,
//       });
//     }

//     setConversations((prevConversations) => [
//       ...prevConversations,
//       ...newConversationItems,
//       {
//         sender: "geniva",
//         message: "",
//         image: "",
//         description: "",
//         loading: true,
//       },
//     ]);
//     try {
//       setTimeout(() => {
//         setConversations((prevConversations) => {
//           const updatedConversations = [...prevConversations];
//           if (updatedConversations.length > 0) {
//             updatedConversations[updatedConversations.length - 1].description =
//               "Halo kak, sebentar GeniVA akan membantu melegakan";
//             updatedConversations[updatedConversations.length - 1].loading =
//               false;
//           }
//           return updatedConversations;
//         });
//       }, 3000);
//     } catch (error) {
//       Alert.alert("Error", "Error while sending message");
//     } finally {
//       setLoading(false);
//       setNewMessages("");
//       setNewImage("");
//     }
//   };

//   console.log(conversations);

//   return (
//     <>
//       <Stack.Screen options={{ headerShown: false }} />
//       <SafeAreaView className="relative flex-1">
//         <ChatBotHeader />

//         {/* Body */}
//         <ScrollView
//           className="flex-1 bg-[#EBEBEB]"
//           contentContainerStyle={{
//             flexGrow: 1,
//             paddingHorizontal: 16,
//             paddingTop: 28,
//           }}
//         >
//           <InitialGeniVATemplate />
//           {conversations.map((conversation, index) => {
//             if (conversation.sender === "user") {
//               return (
//                 <UserMessage
//                   key={index}
//                   text={conversation.message}
//                   image={conversation.image}
//                 />
//               );
//             } else {
//               return (
//                 <GeniVAMessage
//                   key={index}
//                   loading={conversation.loading}
//                   newResponse={index === conversations.length - 1}
//                   description={conversation.description}
//                 />
//               );
//             }
//           })}
//         </ScrollView>

//         {/* Input */}
//         <View className="bg-white pt-4 pb-4">
//           <ScrollView
//             horizontal={true}
//             contentContainerStyle={{
//               paddingHorizontal: 16,
//               gap: 16,
//             }}
//             showsHorizontalScrollIndicator={false}
//           >
//             <Pressable
//               className="border-[1px] border-[#D9D9D9] py-2 rounded-full px-2"
//               onPress={() => setNewMessages("Promo saat ini")}
//             >
//               <Text className="text-[#6E6E6E]">Promo saat ini</Text>
//             </Pressable>
//             <Pressable
//               className="border-[1px] border-[#D9D9D9] py-2 rounded-full px-2"
//               onPress={() => setNewMessages("Pesan makanan dingin")}
//             >
//               <Text className="text-[#6E6E6E]">Pesan makanan dingin</Text>
//             </Pressable>
//             <Pressable
//               className="border-[1px] border-[#D9D9D9] py-2 rounded-full px-2"
//               onPress={() => setNewMessages("Menuju Monumen Nasional")}
//             >
//               <Text className="text-[#6E6E6E]">Menuju Monumen Nasional</Text>
//             </Pressable>
//           </ScrollView>
//           <View className="w-full px-4 flex-row items-center mt-4">
//             <Pressable
//               className="bg-[#00B652] p-2 rounded-full"
//               onPress={pickImage}
//             >
//               <Icon source="image-outline" color="white" size={24} />
//             </Pressable>
//             <View className="flex-1 mx-2 relative">
//               <TextInput
//                 className={`${
//                   newImage !== "" ? "pt-2 pb-20" : "py-2 max-h-24"
//                 } w-full rounded-xl border-[1px] border-[#D9D9D9] px-3`}
//                 multiline
//                 placeholder="Bagaimana GeniVA bisa membantu?"
//                 value={newMessages}
//                 onChangeText={(text) => setNewMessages(text)}
//               />
//               {newImage !== "" && (
//                 <Image
//                   source={{ uri: newImage }}
//                   className="absolute w-16 h-16 rounded-xl bottom-2 left-3"
//                 />
//               )}
//             </View>
//             <Pressable onPress={handleSend}>
//               <Icon source="send" color="#00B652" size={28} />
//             </Pressable>
//           </View>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// export default index;

// =====================================================================================================

// import { View, Text, ScrollView, Pressable, Image } from "react-native";
// import React from "react";
// import { Icon } from "react-native-paper";
// import { Stack } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
// import HISTORY_IMAGE from "@/static/image/history";

// interface indexProps {}

// const index: React.FC<indexProps> = () => {
//   const [selected, setSelected] = React.useState("Transport");
//   return (
//     <>
//       <Stack.Screen options={{ headerShown: false }} />
//       <SafeAreaView className="flex-1 bg-white">
//         <View className="w-full flex-row items-center px-6 py-3">
//           <Pressable>
//             <Icon source="arrow-left" size={24} />
//           </Pressable>
//           <Text className="text-2xl ml-4 font-bold">Activity History</Text>
//         </View>
//         <View className="w-full">
//           <ScrollView
//             className="w-full bg-white mt-4"
//             horizontal={true}
//             contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
//             showsHorizontalScrollIndicator={false}
//           >
//             <Pressable
//               className={`${
//                 selected === "Transport" ? "bg-[#01543A]" : "bg-[#EEF9FB]"
//               } px-4 py-2 rounded-full text-white`}
//               onPress={() => setSelected("Transport")}
//             >
//               <Text
//                 className={`${
//                   selected === "Transport" ? "text-white" : "text-[#01543A]"
//                 } font-semibold `}
//               >
//                 Transport
//               </Text>
//             </Pressable>
//             <Pressable
//               className={`${
//                 selected === "Food" ? "bg-[#01543A]" : "bg-[#EEF9FB]"
//               } px-4 py-2 rounded-full `}
//               onPress={() => setSelected("Food")}
//             >
//               <Text
//                 className={`${
//                   selected === "Food" ? "text-white" : "text-[#01543A]"
//                 } font-semibold`}
//               >
//                 Food
//               </Text>
//             </Pressable>
//             <Pressable
//               className={`${
//                 selected === "Mart" ? "bg-[#01543A]" : "bg-[#EEF9FB]"
//               } px-4 py-2 rounded-full`}
//               onPress={() => setSelected("Mart")}
//             >
//               <Text
//                 className={`${
//                   selected === "Mart" ? "text-white" : "text-[#01543A]"
//                 } font-semibold`}
//               >
//                 Mart
//               </Text>
//             </Pressable>
//             <Pressable
//               className={`${
//                 selected === "Finance" ? "bg-[#01543A]" : "bg-[#EEF9FB]"
//               } px-4 py-2 rounded-full`}
//               onPress={() => setSelected("Finance")}
//             >
//               <Text
//                 className={`${
//                   selected === "Finance" ? "text-white" : "text-[#01543A]"
//                 } font-semibold`}
//               >
//                 Finance
//               </Text>
//             </Pressable>
//             <Pressable
//               className={`${
//                 selected == "Express" ? "bg-[#01543A]" : "bg-[#EEF9FB]"
//               } px-4 py-2 rounded-full`}
//               onPress={() => setSelected("Express")}
//             >
//               <Text
//                 className={`${
//                   selected === "Express" ? "text-white" : "text-[#01543A]"
//                 } font-semibold`}
//               >
//                 Express
//               </Text>
//             </Pressable>
//           </ScrollView>
//         </View>
//         <ScrollView
//           className="flex-1 bg-white"
//           contentContainerStyle={{ flexGrow: 1, backgroundColor: "#FFFFFFs" }}
//         >
//           <View className="flex-row items-start py-8">
//             <View className="w-[20%] items-center">
//               <Image source={HISTORY_IMAGE.car} className="w-7 h-7" />
//             </View>

//             <View className="w-[55%]">
//               <Text className="font-semibold">
//                 Jackal Holidays Dipatiukur 89 to No.16 Jalan Tubagus Ismail 1
//               </Text>
//               <Text className="text-[#6F6F6F] font-semibold mt-2">
//                 17 Apr 2024, 19:24
//               </Text>
//               <View className="flex-row items-center mt-4">
//                 <Pressable>
//                   <Text className="font-bold text-[#0A6FD3]">Rebook</Text>
//                 </Pressable>
//                 <View className="p-1 bg-[#E9F8FC] rounded-full ml-2">
//                   <Icon source="arrow-right" color="#0A6FD3" size={12} />
//                 </View>
//               </View>
//             </View>
//             <View className="w-[25%] items-center">
//               <Text className="text-[#222222] font-semibold">Rp13.000</Text>
//               <Text className="text-[#6F6F6F] font-semibold">+26 points</Text>
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// export default index;
