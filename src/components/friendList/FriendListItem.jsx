import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
