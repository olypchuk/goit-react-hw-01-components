import { Container, Title, List, Item,getRandomColor,Label,Percentage} from "./Statistics.styled"

export const Statistics = ({ title, stats }) => {

 return  ( <Container>
   {title && (<Title>{title}</Title>)}
   <List>
     {
       stats.map(stat=> <Item key={stat.id} img={getRandomColor()}>
  <Label>.{stat.label}</Label>
 <Percentage>{stat.percentage}%</Percentage>
  </Item> )
     }
    
 </List>
 </Container>)
}
