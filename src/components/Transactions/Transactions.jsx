import { Table, Tr, Th, Td, TrBody } from "./Transactions.styled"
import PropTypes from "prop-types";
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

TransactionHistory.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
})
),
}
