import axios from "axios";
import * as React from "react";
import { Card, Title, Paragraph, Avatar, Button } from 'react-native-paper';
import { BASE_URL } from "../config";
import tw from "twrnc";
import { Linking, Text} from 'react-native'
import { phone } from 'react-native-paper';

const TripDetailsScreen = ({route}) => {
  const { trip} = route.params;
  // console.log(invoice);
  return (
    <Card>
    <Card.Content style={{
      alignItems: 'center',
    }}>
      <Title>Trip Details</Title>
      <Title>Status: {trip.current_status}</Title>
      <Paragraph>Start: {trip.start_location}</Paragraph>
      <Paragraph>End: {trip.end_location}</Paragraph>
      <Paragraph>Status: {trip.status}</Paragraph>
      <Paragraph>Distance: {trip.distance}</Paragraph>
      <Paragraph>Total: {trip.total}</Paragraph>
      
    
    </Card.Content>
    <Card.Content style={{
      alignItems: 'center',
    }}>
      <Title>Driver Info</Title>
      <Title>Name: {trip?.driver?.first_name} {trip?.driver?.last_name} </Title>
      <Title>Phone: {trip?.driver?.mobile}</Title>


      <Button  icon="phone" onPress={()=>{
        Linking.openURL(`tel:${trip?.driver?.mobile}`)
      }}
      style={{
        height:30,
      }} >
        Call Driver
      </Button>

    </Card.Content>
  </Card>
  );
};

export default TripDetailsScreen;
