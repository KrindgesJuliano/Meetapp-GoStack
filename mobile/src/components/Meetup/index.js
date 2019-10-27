import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Buttons from '~/components/Buttons';

import {
  Container,
  Image,
  Info,
  Title,
  Time,
  Locale,
  Host,
  IconText,
} from './styles';

export default function Meetup({ data, onButton, ButtonText }) {
  return (
    <Container>
      <Image
        source={{uri: data.imagem ? data.imagem.url :
           'https://blogs.mulesoft.com/wp-content/uploads/2017/11/mulesoft-developer-meetups.png'
        }}
      />
      <Info>
        <Title>{data.title}</Title>
        <IconText>
          <Icon name="event" size={14} color="#999" />
          <Time>{data.formattedDate}</Time>
        </IconText>
        <IconText>
          <Icon name="place" size={14} color="#999" />
          <Locale>{data.location}</Locale>
        </IconText>
        <IconText>
          <Icon name="person" size={14} color="#999" />
          <Host>Organizador: {data.User.name}</Host>
        </IconText>
        <Buttons onPress={onButton}>{ButtonText}</Buttons>
      </Info>

    </Container>
  );
}
