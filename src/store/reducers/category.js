export default (state = '', action = {}) =>
  action.type === 'DETAIL' ? action.payload.category : state;
