
const defaultState = [];

export default (state = defaultState, action) => {

  const { type, payload } = action;

  switch (type) {
    case 'CATEGORY_CREATE': return [...state, payload];
    case 'CATEGORY_UPDATE': return state.map(category => category.id === payload.id ? payload : category);
    case 'CATEGORY_DESTROY': return state.filter(category => category.id !== payload.id);
    case 'CATEGORY_RESET': return defaultState;
    default: return state;
  }
};