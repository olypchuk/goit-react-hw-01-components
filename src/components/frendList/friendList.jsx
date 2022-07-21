import { FriendListItem } from "./FriendListItem"
import { Container } from "./FriendList.styled"
import PropTypes from "prop-types";
export const FriendList = ({ friends }) => {
 
  return <Container>{friends.map(friend =>
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          /> 
        )     
  }</Container>
}

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
     PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
     })
  ),
}