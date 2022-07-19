import { FriendListItem } from "./FriendListItem"
import { Container } from "./FriendList.styled"
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
