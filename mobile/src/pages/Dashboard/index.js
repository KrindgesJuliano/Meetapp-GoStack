import React, { useEffect, useState, useMemo } from 'react';
import { showMessage } from 'react-native-flash-message';
import { TouchableOpacity } from 'react-native';
import { format, parseISO, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/Services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import { Container, DataTime, Time, List } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function formatMeetups(noFormattedMeetups) {
    return noFormattedMeetups.map(meetup => ({
      ...meetup,
      formattedDate: format(parseISO(meetup.date), "MMMM d', às' hh'h'mm", {
        locale: pt,
      }),
    }));
  }

  useEffect(() => {
    async function loadingMeetups() {
      const response = await api.get('meetups', { params: { date } });

      setMeetups(formatMeetups(response.data));
    }

    loadingMeetups();
  }, [date]);

  async function handleSubscribe(id) {
    try {
      await api.post(`meetups/${id}/subs`);

      showMessage({
        message: 'Inscricao realizada com sucesso!',
        type: 'info',
      });
    } catch (error) {
      showMessage({
        message: 'nao foi possivel realizar a inscricao',
        type: 'danger',
      });
    }
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function loadMoreMeetups() {
    const nextPage = page + 1;

    const response = await api.get('meetups', {
      params: { date, page: nextPage },
    });

    setMeetups([...meetups, ...formatMeetups(response.data)]);
    setPage(nextPage);
  }

  return (
    <Background>
      <Container>
        <Header />
        <DataTime>
          <TouchableOpacity onPress={handlePrevDay}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Time>{dateFormatted}</Time>
          <TouchableOpacity onPress={handleNextDay}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </DataTime>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2}
          onEndReached={loadMoreMeetups}
          renderItem={({ item }) => (
            <Meetup
              onButton={() => handleSubscribe(item.id)}
              data={item}
              ButtonText="Realizar Inscrição"
            />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
