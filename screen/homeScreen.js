import * as  React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'lightgreen' }}>
        <Text>Home!</Text>
        <FontAwesome name="home" size={45} color="blue" />
      </View>
    );
  }