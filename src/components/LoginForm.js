import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>    
      </Card>
    );
  }
}
export default LoginForm;
