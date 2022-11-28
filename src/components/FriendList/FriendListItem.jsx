import PropTypes from 'prop-types';

import {
  Item,
  Avatar,
  Name,
  Status,
} from 'components/FriendList/FriendList.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
