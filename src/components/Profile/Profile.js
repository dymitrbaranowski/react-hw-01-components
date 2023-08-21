import { Container ,Description, Avatar, ProfileName, ProfileTag, Stats} from "./Profile.styled";


export const Profile = ({ items: { avatar, username, tag, location, stats } }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileTag>{location}</ProfileTag>
      </Description>

      <Stats>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </Stats>
    </Container>
  );
};
