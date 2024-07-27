import { View, Text } from "react-native";
import React from "react";

interface PaymentProps {}

const Payment: React.FC<PaymentProps> = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text>Payment</Text>
    </View>
  );
};

export default Payment;
