import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text, Loading } from './styles';

function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? <Loading /> : <Text>{children}</Text>}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
