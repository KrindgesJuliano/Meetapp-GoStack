import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  padding: 0 20px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      margin: 0 0 15px;
      width: 100%;

      color: #ffffff;
      font-size: 18px;
      line-height: 21px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      text-align: center;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      background: #f94d6a;
      border: 0;
      height: 42px;
      width: 172px;
      border-radius: 4px;
      margin: 0;
      display: flex;
      justify-content: space-around;
      padding: 0 10px 0 10px;
      align-self: flex-end;

      color: #ffffff;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.05, '#f94d6a')};
      }
    }
  }

  a {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;
