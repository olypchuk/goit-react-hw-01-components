import styled from 'styled-components'

export const Profile = styled.div`
width:400px;
background-color:#dbdbdb;
margin:0 auto;
padding: 15px;
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 8px -8px 15px -16px rgba(0,0,0,0);`

export const Description = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;

`
export const Image = styled.img`
border-radius:50%;
width:320px;
`
export const Name = styled.p`
font-size:24px;
font-weight:bold;

` 
export const Stats = styled.ul`
display:flex;
padding:0;
justify-content: space-around;
margin:20px 0;
`
export const Elements = styled.li`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;

`
export const Quantity = styled.span`
font-size:20px;
font-weight:700;
margin:10px 0;
`
export const Label = styled.p`
margin:10px 0;
`