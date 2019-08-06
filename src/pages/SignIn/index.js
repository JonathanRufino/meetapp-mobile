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

          <SubmitButton onPress={() => {}}>Entrar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta grátis</SignLinkText>
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
