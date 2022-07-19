import styled from "styled-components";

export const Container = styled.ul`
width:500px;

margin:40px auto;
padding: 15px;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center`

export const Item = styled.li`
border:1px solid grey;
padding: 15px;
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 8px -8px 15px -16px rgba(0,0,0,0);
display:flex;
width:80%;
margin: 15px;
justify-content:space-around;
align-items:center
`
export const Status = styled.span`
width:15px;
height:15px;
border-radius:50%;
background-color:${props => props.status? 'green':'red' }

`
export const Name = styled.span`
font-size:20px;
font-weight:700`