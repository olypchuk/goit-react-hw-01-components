import { Table,Tr ,Th,Td,TrBody} from "./Transactions.styled"
export const TransactionHistory = ({ items }) => {

    return (<Table>
  <thead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </thead>

      <tbody>
        {items.map(item =>
           <TrBody key={item.id}>
      <Td>{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </TrBody>  
          )}
  </tbody>
</Table>)
}