// Reducer

function counter(state, action) {
  if (state === undefined) {
    return { count: 0 };
  }

  let count = state.count;

  switch (action.type) {
    case 'increase':
      return { count: count++ };
    case 'decrease':
      return { count: count-- };
    default:
      return state;
  }
}

export default counter;