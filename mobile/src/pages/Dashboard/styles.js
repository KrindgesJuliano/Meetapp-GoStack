import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DataTime = styled.View`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  align-self: center;
  margin-top: 34px;
`;

export const Time = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin: 0 15px 0 15px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
