import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background, Meetup } from '~/components';

import {
  Container,
  DateControl,
  DateButton,
  Date,
  MeetupsList,
} from './styles';

const data = [
  {
    id: 37,
    title: 'Meetup de React Native',
    description: 'Teste',
    location: 'Rua Guilherme Gembala, 260',
    date: '2019-10-11 01:00:00.000 +00:00',
    user: {
      name: 'Jonathan Rufino Paiva',
    },
    banner: {
      url:
        'http://192.168.0.16:3333/files/9fb344a96f0956e868598098d1ef3135.JPG',
    },
  },
  {
    id: 38,
    title: 'Meetup de React Native',
    description: 'Teste',
    location: 'Rua Guilherme Gembala, 260',
    date: '2019-10-11 01:00:00.000 +00:00',
    user: {
      name: 'Jonathan Rufino Paiva',
    },
    banner: {
      url:
        'http://192.168.0.16:3333/files/9fb344a96f0956e868598098d1ef3135.JPG',
    },
  },
  {
    id: 39,
    title: 'Meetup de React Native',
    description: 'Teste',
    location: 'Rua Guilherme Gembala, 260',
    date: '2019-10-11 01:00:00.000 +00:00',
    user: {
      name: 'Jonathan Rufino Paiva',
    },
    banner: {
      url:
        'http://192.168.0.16:3333/files/9fb344a96f0956e868598098d1ef3135.JPG',
    },
  },
  {
    id: 40,
    title: 'Meetup de React Native',
    description: 'Teste',
    location: 'Rua Guilherme Gembala, 260',
    date: '2019-10-11 01:00:00.000 +00:00',
    user: {
      name: 'Jonathan Rufino Paiva',
    },
    banner: {
      url:
        'http://192.168.0.16:3333/files/9fb344a96f0956e868598098d1ef3135.JPG',
    },
  },
];

function Meetups() {
  return (
    <Background>
      <Container>
        <DateControl>
          <DateButton>
            <Icon name="chevron-left" size={30} color="#fff" />
          </DateButton>

          <Date>31 de Maio</Date>

          <DateButton>
            <Icon name="chevron-right" size={30} color="#fff" />
          </DateButton>
        </DateControl>

        <MeetupsList
          data={data}
          renderItem={({ item }) => (
            <Meetup
              data={item}
              action="Realizar inscrição"
              onPress={() => {}}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </Container>
    </Background>
  );
}

Meetups.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default Meetups;
