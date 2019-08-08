import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
import { Background, Meetup } from '~/components';

import { Container, SubscriptionsList } from './styles';

function Subscriptions({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadSubscriptions() {
    const response = await api.get('subscriptions');

    setSubscriptions(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancelSubscription(subscriptionId) {
    await api.delete(`subscriptions/${subscriptionId}`);

    setSubscriptions(
      subscriptions.filter(subscription => subscription.id !== subscriptionId)
    );
  }

  return (
    <Background>
      <Container>
        <SubscriptionsList
          data={subscriptions}
          renderItem={({ item }) => (
            <Meetup
              data={item.meetup}
              action="Cancelar inscrição"
              onPress={() => handleCancelSubscription(item.id)}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Subscriptions);
