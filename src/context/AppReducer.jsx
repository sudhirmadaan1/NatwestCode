 export default (state, action) => {
  switch(action.type) {
    case 'FILTER_LIST':
    return {
      payment: {
        results: [...action.payload],
      }
    }
    case 'LOAD_MORE_ITEM':
    return {
      payment: {
        results: [...action.payload, ...state.payment.results]
      }
    }
    case 'GET_ITEM':
    return {
      payment: action.payload
    }
      default:
      return state;
  }
}