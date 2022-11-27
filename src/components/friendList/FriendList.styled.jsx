import styled from '@emotion/styled';

export const FriendListStyle = styled.ul`
  display: block;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 10px 30px;
  box-shadow: 0px 2px 2px 2px rgba(17, 16, 16, 0.65);
`;

export const Status = styled.span`
  display: inline;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => {
    console.log(props.isOnline);
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'gray';
    }
  }};
`;

export const Avatar = styled.img`
  display: inline;
  width: 70px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const Name = styled.p`
  display: inline;
  font-size: 30px;
  font-weight: 700;
`;
