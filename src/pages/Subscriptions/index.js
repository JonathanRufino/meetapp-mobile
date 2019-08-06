import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '~/components';

// import { Container } from './styles';

function Subscriptions() {
  return <Background />;
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default Subscriptions;
