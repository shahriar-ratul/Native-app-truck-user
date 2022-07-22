import axios from "axios";
import * as React from "react";
import { Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';
import { BASE_URL } from "../config";
import tw from "twrnc";

const InvoiceDetailsScreen = ({route}) => {
  const { invoice} = route.params;
  // console.log(invoice);
  return (
    
    <Card>
      <StatusBar backgroundColor="#03baab" barStyle="light-content" />
    <Card.Content style={{
      alignItems: 'center',
    }}>
      <Title>Invoice </Title>
      <Paragraph>Date: {invoice.created_at}</Paragraph>
      <Paragraph>Amount: {invoice.total}</Paragraph>
      <Paragraph>Status: {invoice.status}</Paragraph>
    </Card.Content>
  </Card>
  );
};

export default InvoiceDetailsScreen;
