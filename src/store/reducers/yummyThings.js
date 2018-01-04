export default (state = [], action = {}) => {
  switch (action.type) {
    case 'YUMMY_THINGS_FETCHED':
      return action.payload.yummyThings;
    default:
      return state;
  }
};
