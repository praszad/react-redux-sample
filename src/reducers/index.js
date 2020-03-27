export default (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count
      };
    default:
      return state;
  }
};
