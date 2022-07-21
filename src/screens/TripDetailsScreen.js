import axios from "axios";
import * as React from "react";
import { Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';
import { BASE_URL } from "../config";
import tw from "twrnc";

const TripDetailsScreen = ({route}) => {
  const { trip} = route.params;
  // console.log(invoice);
  return (
    <Card>
    <Card.Content style={{
      alignItems: 'center',
    }}>
      <Title>trip </Title>
      <Paragraph>Start: {trip.created_at}</Paragraph>
      <Paragraph>End: {trip.total}</Paragraph>
      <Paragraph>Status: {trip.status}</Paragraph>
    </Card.Content>
  </Card>
  );
};

export default TripDetailsScreen;
