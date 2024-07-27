import React from "react";
import { Stack } from "expo-router";
import KYCContextProvider from "@/store/context/kycContext";

const BookingLayout = () => {
  return (
    <>
      <KYCContextProvider>
        <Stack.Screen options={{ headerShown: false }} />
        <Stack />
      </KYCContextProvider>
    </>
  );
};

export default BookingLayout;
