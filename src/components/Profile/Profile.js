import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  ProfileName,
  ProfileTag,
  Stats,
  LikeList,
  FollowersList,
  ViewsList,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  items: { avatar, username, tag, location, stats },
}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileTag>{location}</ProfileTag>
      </Description>

      <Stats>
        <FollowersList>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </FollowersList>
        <ViewsList>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ViewsList>
        <LikeList>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </LikeList>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
