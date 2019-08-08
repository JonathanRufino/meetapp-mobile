import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import { Background, Meetup } from '~/components';

import { Container, SubscriptionsList } from './styles';

function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('subscriptions');

      setSubscriptions(response.data);
    }

    loadSubscriptions();
  }, []);

  function handleCancelSubscription() {}

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

export default Subscriptions;
