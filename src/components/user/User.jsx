import { Profile,Description,Image,Name,Stats,Elements,Quantity,Label } from './User.styled'
import PropTypes from "prop-types";
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
User.propTypes={
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.shape({
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
  })
  
}
