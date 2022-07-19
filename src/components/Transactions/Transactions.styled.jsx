import styled from "styled-components";

export const Table = styled.table`
margin:20px auto;
width:600px
`
export const Tr = styled.tr`
background-color:grey;
text-align:center
`
export const Th = styled.th`
padding:15px;
min-width:150px;
color:white`

export const TrBody = styled.tr`
:nth-child(odd) {
  background-color: #abcdf5;;
 }
 text-align:center;
`
export const Td = styled.td`

padding:15px;
font-size:18px
`