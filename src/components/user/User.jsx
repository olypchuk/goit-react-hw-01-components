import { Profile,Description,Image,Name,Stats,Elements,Quantity,Label } from './User.styled'

export const User = ({ username, tag, location, avatar, stats }) => {
    return (<Profile>
  <Description>
    <Image
      src={avatar}
      alt={username}
     
    />
    <Name>{username}</Name>
    <Label>@{tag}</Label>
    <Label>{location}</Label>
  </Description>

  <Stats>
    <Elements>
      <span className="label">Followers</span>
      <Quantity>{stats.followers}</Quantity>
    </Elements>
    <Elements>
      <span className="label">Views</span>
      <Quantity>{stats.views}</Quantity>
    </Elements>
    <Elements>
      <span className="label">Likes</span>
      <Quantity>{stats.likes}</Quantity>
    </Elements>
  </Stats>
</Profile>
    )
}
