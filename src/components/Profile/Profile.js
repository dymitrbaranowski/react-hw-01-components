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
          <span>Followers</span>
          <span>{stats.followers}</span>
        </FollowersList>
        <ViewsList>
          <span>Views</span>
          <span>{stats.views}</span>
        </ViewsList>
        <LikeList>
          <span>Likes</span>
          <span>{stats.likes}</span>
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
