import React from 'react';

const paymentListing = ({list, idx}) => {
  return(
    <tr key={idx}>
      <td scope="col">{list.paymentAmount} {list.paymentCurrency}</td>
      <td scope="col">{list.paymentDate}</td>
      <td scope="col">{list.paymentStatus}</td>
      <td scope="col">{list.paymentType}</td>
      <td scope="col">{list.toAccaunt.accountName}</td>
      <td scope="col">{list.toAccaunt.accountNumber}</td>
      <td scope="col">{list.toAccaunt.sortCode}</td>
      <td scope="col">{list.fromAccount.accountName}</td>
      <td scope="col">{list.fromAccount.accountNumber}</td>
      <td scope="col">{list.fromAccount.sortCode}</td>
    </tr>
  )
}

export default paymentListing;