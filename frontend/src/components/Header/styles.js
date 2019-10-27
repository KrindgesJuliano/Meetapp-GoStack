import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;

    > button {
      width: 71px;
      height: 42px;
      background: #d44059;
      border: 0;
      align-self: center;

      border-radius: 4px;

      color: #ffffff;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.05, '#D44059')};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-right: 30px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
    }

    a {
      display: block;
      margin-top: 5px;
      font-size: 14px;
      line-height: 16px;
      color: #999999;
    }
  }
`;
