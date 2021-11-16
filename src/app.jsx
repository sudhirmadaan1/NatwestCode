import React, { useContext } from "react";
import { GlobalContext } from './context/GlobalState';
import PaymentList from './Components/Listing';
import FilterListBtn from './Components/Filter';
import LoadMoreBtn from './Components/Load';


import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { isLoading, paymentList } = useContext(GlobalContext);
  
  return (
    <div>{!isLoading ? 
      (
      <table className="table table-bordered">
      <thead>
      <tr>
        <td colSpan="2"><FilterListBtn /></td>
        <td colSpan="8"><LoadMoreBtn /></td>
      </tr>      
      <tr>
        <th scope="col">Payment Amount</th>
        <th scope="col">Payment Date</th>
        <th scope="col">Payment Status</th>
        <th scope="col">Payment Type</th>
        <th scope="col">ToAccount - Account Name</th>
        <th scope="col">ToAccount - Account Number</th>
        <th scope="col">ToAccount - Account sortCode</th>
        <th scope="col">FromAccount - Account Name</th>
        <th scope="col">FromAccount - Account Number</th>
        <th scope="col">FromAccount - Account sortCode</th>
      </tr>
      </thead>
      <tbody>        
        {paymentList.map((list, i) => ( <PaymentList list={list} idx={i} />))}
      </tbody>
    </table>)
    : <p>Loading...</p>}</div>
  );
};

export default App;
