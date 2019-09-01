import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';

import { Container, Title, Message } from './styles';

function EmptyState({ image, title, message }) {
  return (
    <Container>
      {image}
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Container>
  );
}

EmptyState.propTypes = {
  image: PropTypes.element,
  title: PropTypes.string,
  message: PropTypes.string,
};

EmptyState.defaultProps = {
  image: <Icon name="block" size={100} color="#999" />,
  title: 'Vazio por aqui não é mesmo?',
  message:
    'Não encontramos o que você estava procurando. Mas fique à vontade de continue olhando por aí. :)',
};

export default EmptyState;
