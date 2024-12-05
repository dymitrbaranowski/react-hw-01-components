import PropTypes from 'prop-types';
import {
  Avatar,
  Item,
  Name,
  Status,
} from '../FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status statusType={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
