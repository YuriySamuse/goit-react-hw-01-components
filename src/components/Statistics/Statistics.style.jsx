import styled from '@emotion/styled';
import { setBg } from 'utils/RandomColor';

export const StatisticSection = styled.section`
  width: 500px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 4px 4px hsla(0, 0%, 0%, 0.15);
  text-align: center;
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #016c19;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 5px;
  border-color: black;
`;

export const Item = styled.li`
  display: block;
  width: 100px;
  margin: 0;
  padding: 20px;
  background-color: ${setBg};
  box-shadow: 0px 4px 4px hsla(5, 0%, 0%, 0.25);
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  font-size: 20px;
  color: white;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 30px;
  color: white;
`;
