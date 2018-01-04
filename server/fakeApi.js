// this is essentially faking/mocking the fetch api
// pretend this actually requested data over the network

export const fetchYummyThings = async path => {
  const category = path.replace('/api/category/', '');

  switch (category) {
    case 'candy':
      return ['skittles', 'resses pieces', 'italian nougat'];
    case 'dinners':
      return ['burger', 'pizza', 'big yummy salad'];
    default:
      return [];
  }
};
