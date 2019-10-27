import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 940px;
  display: flex;
  flex-direction: column;
  color: #fff;
  margin: 59px auto;
  padding: 0 20px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 59px;

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

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
  }
`;

export const Event = styled.li`
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0 30px 0 30px;
  cursor: pointer;

  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  aside {
    display: flex;
    align-content: center;
    align-items: center;

    span {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      opacity: 0.6;
      text-align: right;
    }

    button {
      background: none;
      border: 0;
      margin-left: 20px;
    }
  }
`;
