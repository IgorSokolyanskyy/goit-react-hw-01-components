import PropTypes from 'prop-types';
import { List, Item, Chip, Img, Name } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <Item key={id}>
          <Chip isOnline={isOnline}></Chip>
          <Img src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
        </Item>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
