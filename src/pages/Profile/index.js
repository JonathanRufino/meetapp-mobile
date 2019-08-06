import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '~/components';

// import { Container } from './styles';

function Profile() {
  return <Background />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

export default Profile;
