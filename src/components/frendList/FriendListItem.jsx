import { Item,Name,Status } from "./FriendList.styled"

export const FriendListItem = ({ avatar, name, isOnline }) => {

    return <Item>
        <Status status={isOnline}/>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Item>
}
