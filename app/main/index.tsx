import Navbar from "@/components/bottomNavbar/Navbar";
import React, { useRef, useState } from "react";
import Home from "./home";
import Activity from "./activity";
import Payment from "./payment";
import Messages from "./messages";
import Account from "./account";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { Stack } from "expo-router";

const NAVBAR_HEIGHT = 70; // Adjust this value based on your navbar's height

const Page = () => {
  const [page, setPage] = useState("home");
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClamp = Animated.diffClamp(scrollY, 0, NAVBAR_HEIGHT);
  const translateY = diffClamp.interpolate({
    inputRange: [0, NAVBAR_HEIGHT],
    outputRange: [0, NAVBAR_HEIGHT],
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    scrollY.setValue(offsetY);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      {page === "home" && <Home onScroll={handleScroll} />}
      {page === "activity" && <Activity />}
      {page === "payment" && <Payment />}
      {page === "messages" && <Messages />}
      {page === "account" && <Account />}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          transform: [{ translateY }],
        }}
      >
        <Navbar page={page} setPage={setPage} />
      </Animated.View>
    </>
  );
};

export default Page;
