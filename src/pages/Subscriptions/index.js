import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
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
      <StatusBar barStyle="light-content" backgroundColor="#000" />

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

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Subscriptions);
