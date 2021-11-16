import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

let isBtnClicked = false;

const filterList = () => {
  const { filterData } = useContext(GlobalContext);
  const btnTxt = ['Filter pending payment', 'Back to Listing'];
  const [ toogleTxt, setToggleTxt ] = useState(btnTxt[0]);
  
  const filterList = () => {
    if(!isBtnClicked) {
      setToggleTxt(btnTxt[1]);
      isBtnClicked = true;
    } else {
      setToggleTxt(btnTxt[0]);
      isBtnClicked = false;
    }
    filterData(isBtnClicked);
  }
  
  return(
    <button type="button" className="btn btn-primary btn-md" onClick={filterList}>{toogleTxt}</button>
  )
}

export default filterList;