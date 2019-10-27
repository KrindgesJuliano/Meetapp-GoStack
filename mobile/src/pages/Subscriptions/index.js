import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { showMessage } from 'react-native-flash-message';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/Services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import { Container, List } from './styles';

function Subscriptions(isFocused) {
  const profile = useSelector(state => state.user.profile);
  const [subscription, setsubscription] = useState([]);

  async function loadingSubscription() {
    const response = await api.get(`subs/${profile.id}`);
    const data = response.data.map(sub => ({
      ...sub.Meetup,
      formattedDate: format(parseISO(sub.Meetup.date), "MMMM d', às' hh'h'mm", {
        locale: pt,
      }),
    }));

    setsubscription(data);
  }

  useEffect(() => {
    if (isFocused) {
      loadingSubscription();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  async function handleCancel({ id }) {
    try {
      await api.delete(`subs/${id}`);

      loadingSubscription();

      showMessage({
        message: 'Inscrição cancelada',
        type: 'info',
      });
    } catch (err) {
      showMessage({
        message: 'Ocorreu algum erro ao cancelar a inscricao',
        type: 'danger',
      });
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <List
          data={subscription}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              onButton={() => handleCancel(item)}
              data={item}
              ButtonText="Cancelar Inscrição"
            />
          )}
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

export default withNavigationFocus(Subscriptions);
