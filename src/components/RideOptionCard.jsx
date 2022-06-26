import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const RideOptionCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={[tw`absolute top-3 left-5 p-3 rounded-full`]}
        >
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 flex-grow text-xl`}>Book Now</Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;
