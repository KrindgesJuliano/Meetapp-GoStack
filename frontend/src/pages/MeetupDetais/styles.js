import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 940px;
  margin: 50px auto;
  color: #fff;
  padding: 0 20px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    align-content: center;
    align-items: center;

    aside {
      display: flex;
    }
  }
`;

export const EditButton = styled.button`
  background: #4dbaf9;
  border: 0;
  height: 42px;
  width: 116px;
  border-radius: 4px;
  margin: 0 10px;
  display: flex;
  justify-content: space-around;

  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  transition: background 0.2s;

  &:hover {
    background: ${lighten(0.05, '#4dbaf9')};
  }
`;

export const Cancelbutton = styled(EditButton)`
  background: #f94d6a;
  width: 138px;

  &:hover {
    background: ${lighten(0.05, '#f94d6a')};
  }
`;

export const Details = styled.div`
  img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }

  p {
    margin-top: 25px;
    font-size: 18px;
    line-height: 32px;
  }

  footer {
    margin-top: 30px;
    display: flex;
    font-size: 16px;
    line-height: 19px;
    opacity: 0.6;

    time {
      margin-right: 60px;
    }
  }
`;
