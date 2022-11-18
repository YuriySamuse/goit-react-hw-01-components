import styled from '@emotion/styled';

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
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  color: #016c19;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: auto;
  border: 1px solid black;
  list-style: none;
  margin: 0;
  padding: 10px;
`;

export const Label = styled.span``;

export const Percentage = styled.span``;
