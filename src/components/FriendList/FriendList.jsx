import PropTypes from 'prop-types';
import { FriendListStyle } from 'components/FriendList/FriendList.styled';

import FriendListItem from 'components/FriendList/FriendListItem';

function FriendList({ friends }) {
  //   console.log(friends);
  return (
    <FriendListStyle>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListStyle>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
