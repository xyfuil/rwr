function defaultReducer(state, action) {

  if (typeof state === 'undefined'){
    state = {};
  }

  switch (action.type) {
    case 'SAY_SOMETHING':
      state.message = action.value;
      return state;
    default:
      return state
  }
}

export default defaultReducer;