import React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { List, Card, Paragraph, Title } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from "react-native-vector-icons/FontAwesome";

function HomeScreen() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={style.title}>
            International Potato Day
          </Text>

          <Card style={style.card}>
            <Card.Content> 
              <Title>Welcome</Title>
              <Paragraph>Thank you for downloading this app</Paragraph>
            </Card.Content>
            <Card.Cover style= {{marginTop:10, height:200}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg' }} />
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const style= StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign:'center',
      marginTop: 20
    },
    card: {
      marginTop:20,
      marginLeft:15,
      marginRight:15
    }
  })

  const Stack = createStackNavigator();

  export default function HomeStack(){
      return(
      <Stack.Navigator>
          <Stack.Screen name= 'Welcome to Cola App' component={HomeScreen} />   
      </Stack.Navigator>
      )
  }


  const dataArray = [
    {
      title: 'What is this?',
      content: 'Exactly what the title days. A basket of potato',
    },
    {
      title: 'Who is this by?',
      content: 'Nico'
    }, 
    {
      title: 'How much does this cost?',
      content: 'Free of charge!'
    },
  ];

  <List.Section title= 'Frequently Asked Question'>
    <List.Accordion title='What is this?'>
      <List.Item title= 'Celebrate lo ' />
    </List.Accordion>

    <List.Accordion title='When will this be?'>
      <List.Item title= 'TODAY! PINKDOT ' />
    </List.Accordion>

    <List.Accordion title='How do join?'>
      <List.Item title= 'PINKDOT URL  ' />
    </List.Accordion>

  </List.Section>