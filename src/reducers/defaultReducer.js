function defaultReducer(state, action) {

  if (typeof state === 'undefined'){
    state = {count: 1};
  }

  switch (action.type) {
    case 'ADD':
      state.count++;
      return state;
    default:
      return state
  }
}

export default defaultReducer;