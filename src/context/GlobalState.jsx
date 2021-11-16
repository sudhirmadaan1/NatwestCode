import React, { useState, useEffect, createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import Axios from 'axios';

const initialState = {
   payment : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);
   const [prevState, setPrevState] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
  
   useEffect(async () => {
      const list = await Axios.get(`http://localhost:9001/api/payments`);
      const data = await list.data;
      dispatch({
          type: 'GET_ITEM',
          payload: data
      });
      setIsLoading(false);
      setPrevState(data);
   }, []);
   
   const loadMoreList = async () => {
      const list = await Axios.get(`http://localhost:9001/api/payments?pageIndex=${state.payment.metaDatal}`);
      const data = await list.data;
      dispatch({
          type: 'LOAD_MORE_ITEM',
          payload: data.results
      });
   }

   const filterData = (isFilterApplied) => {       
      if(!!isFilterApplied){
      const newItems = state.payment.results.filter((item) => {
          return item.paymentStatus === 'P'
      });      
      dispatch({
        type: 'FILTER_LIST',
        payload: newItems,
        isDataFiltered:true
      });  
    } else {
      dispatch({
        type: 'FILTER_LIST',
        payload: prevState.results,
        isDataFiltered:false
      });
    }
   }
   
   return(
    <GlobalContext.Provider value = 
      {{ paymentList : state.payment.results,
          metaData:state.payment.metaDatal, 
          isLoading,
          filterData,
          loadMoreList
      }}> 
      {children}
    </GlobalContext.Provider>
   )
}