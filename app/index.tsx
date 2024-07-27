// import { View, Text, Pressable, TextInput } from "react-native";
// import React from "react";
// import { Link, router, Stack } from "expo-router";
// import RegularInput from "@/components/auth/RegularInput";
// import PasswordInput from "@/components/auth/PasswordInput";
// import { SafeAreaView } from "react-native-safe-area-context";

// interface indexProps {}

// const index: React.FC<indexProps> = () => {
//   const [isValid, setIsValid] = React.useState(false);

//   const [email, setEmail] = React.useState("");
//   const [emailError, setEmailError] = React.useState("");

//   const [password, setPassword] = React.useState("");
//   const [passwordError, setPasswordError] = React.useState("");

//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleEmailChange = (text: string) => {
//     setEmail(text);
//     if (text == "") {
//       setEmailError("Email tidak boleh kosong");
//       setIsValid(false);
//     } else {
//       setEmailError("");
//     }

//     if (text !== "" && password !== "") {
//       setIsValid(true);
//     }
//   };

//   const handlePasswordChange = (text: string) => {
//     setPassword(text);
//     if (text == "") {
//       setPasswordError("Email tidak boleh kosong");
//       setIsValid(false);
//     } else {
//       setPasswordError("");
//     }

//     if (text !== "" && email !== "") {
//       setIsValid(true);
//     }
//   };

//   const handleLogin = () => {
//     console.log("login");
//     router.push("/kyc/question1");
//   };
//   return (
//     <>
//       <Stack.Screen options={{ headerShown: false }} />
//       <SafeAreaView className="flex-1 items-center bg-white px-[5%]">
//         <Text className="text-3xl font-bold text-[#00B14F] mt-[25%]">
//           Login
//         </Text>
//         <View className="w-full mt-2">
//           <RegularInput
//             title="Email/No. Handphone"
//             value={email}
//             handleValue={handleEmailChange}
//             valueError={emailError}
//           />
//         </View>
//         <PasswordInput
//           title="Password"
//           value={password}
//           handleValue={handlePasswordChange}
//           valueError={passwordError}
//           showPassword={showPassword}
//           setShowPassword={setShowPassword}
//         />
//         <Text className="text-black font-semibold self-end mt-2">
//           Lupa password?
//         </Text>
//         <View className="overflow-hidden rounded-full w-full mt-8">
//           <Pressable
//             className={`${isValid ? "bg-[#00B24F]" : "bg-[#747474]"} py-3`}
//             android_ripple={{ color: isValid ? "#00802D" : "#747474" }}
//             disabled={!isValid}
//             onPress={() => handleLogin()}
//           >
//             <Text className="text-white text-center text-base font-semibold">
//               Login
//             </Text>
//           </Pressable>
//         </View>
//         <View className="w-full flex-row justify-center items-center mt-4">
//           <Text>Belum punya akun?</Text>
//           <Link className="text-[#00B24F] ml-1" href={"register"}>
//             Register
//           </Link>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// export default index;

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

import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import CHATBOT_IMAGES from "@/static/image/chatbot";
import { Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row items-center justify-center py-4 bg-white">
          <Pressable onPress={() => router.back()} className="absolute left-4">
            <Icon source="arrow-left" color="#000000" size={24} />
          </Pressable>
          <View className="items-center justify-center">
            <Text
              className="font-bold ml-4 tracking-wide text-lg"
              style={{ fontFamily: "MulishSemiBold" }}
            >
              Bhentuman Baso - Sunter Agung
            </Text>
            <Text>Delivery fee calculated at 16:30:24</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default index;
