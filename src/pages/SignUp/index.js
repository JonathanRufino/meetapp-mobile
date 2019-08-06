import React from 'react';
import PropTypes from 'prop-types';

import { Background, Logo } from '~/components';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo />

        <Form>
          <FormInput
            placeholder="Nome completo"
            autoCapitalize="words"
            returnKeyType="next"
            textContentType="name"
          />

          <FormInput
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            textContentType="emailAddress"
          />

          <FormInput
            placeholder="Sua senha secreta"
            secureTextEntry
            returnKeyType="go"
            textContentType="password"
          />

          <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho login</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignIn;
