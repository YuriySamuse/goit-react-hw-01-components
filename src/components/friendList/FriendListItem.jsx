import PropTypes from 'prop-types';

import {
  Item,
  Avatar,
  Name,
  Status,
} from 'components/friendList/FriendList.styled';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <Item key={id}>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
