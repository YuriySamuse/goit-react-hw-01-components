import styled from '@emotion/styled';

export const Card = styled.section`
  width: 500px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 4px 4px hsla(0, 0%, 0%, 0.15);
`;

export const Description = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(126, 12, 12, 0.95);
`;

export const Name = styled.p`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #016c19;
`;

export const Tag = styled.p`
  font-family: 'Poppins';
  font-weight: 275;
  font-size: 20px;
  line-height: 30px;
  color: #076549;
`;

export const Location = styled.p`
  font-family: 'Poppins';
  font-weight: 275;
  font-size: 20px;
  line-height: 30px;
  color: #076549;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  border: 5px;
  border-color: black;
`;

export const Block = styled.li`
  display: block;
  width: 150px;
  margin: 0;
  padding: 20px;
  background-color: rgb(219, 223, 221);
  box-shadow: 0px 4px 4px hsla(5, 0%, 0%, 0.25);
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  font-size: 25px;
  color: gray;
  margin-bottom: 10px;
  text-align: center;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 30px;
  font-weight: 700;
`;
