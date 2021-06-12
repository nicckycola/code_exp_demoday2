import * as  React from "react";
import { Button, Text, View, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsScreen({ navigation }) {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
        <Text>Events!</Text>
        <Button title='You have won $1mm! Click here!' onPress= {()=> navigation.navigate("Don't get scammed")}/>
    </View>
    );
}

function EventsSecondScreen(){
    return <Text>Don't get scammed</Text>;
}

const Stack = createStackNavigator();

export default function EventsStack(){
    return(
    <Stack.Navigator>
        <Stack.Screen name= 'Events' component={EventsScreen} />
        <Stack.Screen name= "Don't get scammed" component= {EventsSecondScreen} />
    </Stack.Navigator>
    )
}