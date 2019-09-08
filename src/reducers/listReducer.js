const initialState = [
  {
    title: 'One',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'Card 1',
      },
      {
        id: 1,
        text: 'Card 2',
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'case':
      break;
    default:
      return state;
  }
};

export default listReducer;
