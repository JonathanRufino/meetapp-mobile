import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Alert, StatusBar } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { format, addDays, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { Background, Meetup, EmptyState } from '~/components';

import {
  Container,
  DateControl,
  DateButton,
  DateSelected,
  MeetupsList,
  Loading,
} from './styles';

function Meetups() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewable, setViewable] = useState([]);

  const dateFormatted = useMemo(() => {
    return format(date, "d 'de' MMMM", {
      locale: pt,
    });
  }, [date]);

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;

    setLoading(true);

    const response = await api.get('meetups', {
      params: {
        date: date.toISOString(),
        page: pageNumber,
      },
    });
    const totalItems = response.headers['x-total-count'];

    setTotal(Math.ceil(totalItems / 10));
    setMeetups(shouldRefresh ? response.data : [...meetups, ...response.data]);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []); // eslint-disable-line

  useEffect(() => {
    setPage(1);
    setTotal(0);
    setMeetups([]);

    loadPage();
  }, [date]); // eslint-disable-line

  function decrementDate() {
    setDate(subDays(date, 1));
  }

  function incrementeDate() {
    setDate(addDays(date, 1));
  }

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }

  async function handleSubscription(meetupId) {
    try {
      await api.post(`meetups/${meetupId}/subscriptions`);

      Alert.alert('Sucesso!', 'Inscrição realizada com sucesso');
    } catch (err) {
      Alert.alert('Erro na inscrição', err.response.data.error);
    }
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <Container>
        <DateControl>
          <DateButton onPress={decrementDate}>
            <MIcon name="chevron-left" size={30} color="#fff" />
          </DateButton>

          <DateSelected>{dateFormatted}</DateSelected>

          <DateButton onPress={incrementeDate}>
            <MIcon name="chevron-right" size={30} color="#fff" />
          </DateButton>
        </DateControl>

        <MeetupsList
          data={meetups}
          keyExtractor={item => String(item.id)}
          onEndReached={() => loadPage()}
          onEndReachedThreshold={0.1}
          onRefresh={refreshList}
          refreshing={refreshing}
          onViewableItemsChanged={handleViewableChanged}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20 }}
          ListFooterComponent={loading && <Loading />}
          ListEmptyComponent={
            !loading &&
            !refreshing && (
              <EmptyState
                image={<ADIcon name="calendar" size={100} color="#999" />}
                title="Não existem meetups nessa data"
                message="Pesquise por outras datas, com certeza você encontrará um evento super legal."
              />
            )
          }
          renderItem={({ item }) => (
            <Meetup
              data={item}
              action="Realizar inscrição"
              onPress={() => handleSubscription(item.id)}
              visible={viewable.includes(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

export default Meetups;
