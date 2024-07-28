import { View, Text, Alert, ActivityIndicator } from "react-native";
import React from "react";
import axios from "axios";
import baseURL from "@/static/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FoodProps {}

interface FoodHistory {
  id: number;
  user_id: number;
  service_type: string;
  order_time: string;
  pickup_location: string;
  destination: string;
  fare: number;
  status: string;
  food_item_id: number;
}

const Food: React.FC<FoodProps> = () => {
  const [history, setHistory] = React.useState<FoodHistory[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const userID = await AsyncStorage.getItem("geniva_user_id");
        if (!userID) {
          throw new Error("User ID not found");
        }
        const response = await axios.get(`${baseURL}/history/${userID}`);
        console.log(response.data);
        if (Array.isArray(response.data)) {
          setHistory(response.data);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (error) {
        console.error(error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center px-4 pt-4">
      {history.length > 0 ? (
        history.map((item) => (
          <View
            key={item.id}
            className="border-black border-[1px] rounded-xl p-4 mb-4"
          >
            <Text>Order Time: {item.order_time}</Text>
            <Text>Pickup Location: {item.pickup_location}</Text>
            <Text>Destination: {item.destination}</Text>
            <Text>Fare: {item.fare}</Text>
          </View>
        ))
      ) : (
        <Text>No history available</Text>
      )}
    </View>
  );
};

export default Food;
