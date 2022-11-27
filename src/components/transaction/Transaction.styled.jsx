import styled from '@emotion/styled';

export const Table = styled.table`
  font-size: 20px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(221, 216, 216);
  box-shadow: 0px 4px 4px 4px hsla(0, 0%, 0%, 0.15);
`;

export const Thead = styled.thead`
  background-color: rgb(91, 174, 212);
  border: 1px solid rgb(221, 216, 216);
  color: white;
`;

export const Tr = styled.tr`
  height: 50px;
`;

export const Th = styled.th`
  padding: 10px;
`;

export const Tbody = styled.tbody`
  background-color: white;
`;

export const Td = styled.td`
  width: 300px;
  padding: 10px;
  text-align: center;
  color: grey;
  border: 1px solid rgb(221, 216, 216);
`;
