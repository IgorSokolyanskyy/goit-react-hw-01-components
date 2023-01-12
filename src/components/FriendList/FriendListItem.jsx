import PropTypes from 'prop-types';
import { Item, Chip, Img, Name } from './FriendList.styled';

export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
  return (
    <Item>
      <Chip isOnline={isOnline}></Chip>
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
