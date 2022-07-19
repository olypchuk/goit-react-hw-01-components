import styled from "styled-components";

export const Container = styled.div`

width:700px;
background-color:#dbdbdb;
margin:40px auto;
padding: 15px;
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 8px -8px 15px -16px rgba(0,0,0,0);`

export const Title = styled.h1`
text-align:center`

export const List = styled.ul`
display:flex;
padding:0;
margin:10px 0;
justify-content: space-around;`

export const Item = styled.li`
display: flex;
flex-direction: column;
padding: 20px;
width:80px;
background-color: ${props=>props.img};
`
export const Label = styled.span`
font-size:20px
`
export const Percentage = styled.span`
font-size:30px;
font-weight:700;

`
export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

