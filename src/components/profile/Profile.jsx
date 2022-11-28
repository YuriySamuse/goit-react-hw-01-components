import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Block,
  Label,
  Quantity,
} from 'components/Profile/Profile.style';
// import css from 'components/profile/Profile.module.css';
import PropTypes from 'prop-types';

function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Block>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Block>
        <Block>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Block>
        <Block>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Block>
      </Stats>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
