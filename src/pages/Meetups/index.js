import React, { useState, useEffect, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, addDays, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { Background, Meetup } from '~/components';

import {
  Container,
  DateControl,
  DateButton,
  DateSelected,
  MeetupsList,
} from './styles';

function Meetups() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  const dateFormatted = useMemo(() => {
    return format(date, "d 'de' MMMM", {
      locale: pt,
    });
  }, [date]);

  useEffect(() => {
    async function loadMeetups() {
      console.tron.log(date.toISOString());
      const response = await api.get('meetups', {
        params: {
          date: date.toISOString(),
        },
      });

      setMeetups(response.data);
    }

    loadMeetups();
  }, [date]);

  function decrementDate() {
    setDate(subDays(date, 1));
  }

  function incrementeDate() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Container>
        <DateControl>
          <DateButton onPress={decrementDate}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </DateButton>

          <DateSelected>{dateFormatted}</DateSelected>

          <DateButton onPress={incrementeDate}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </DateButton>
        </DateControl>

        <MeetupsList
          data={meetups}
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
