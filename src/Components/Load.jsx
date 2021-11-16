import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const LoadMoreList = () => {
  const { loadMoreList } = useContext(GlobalContext);

  return(
    <button type="button" className="btn btn-primary btn-md" onClick={loadMoreList}>Load more >></button>
  )
}

export default LoadMoreList;