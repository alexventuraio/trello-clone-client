const initialState = [
  {
    title: 'Column One',
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
  {
    title: 'Column Two',
    id: 1,
    cards: [
      {
        id: 0,
        text: 'Card 1',
      },
      {
        id: 1,
        text: 'Card 2',
      },
      {
        id: 2,
        text: 'Card 3',
      },
      {
        id: 3,
        text: 'Card 4',
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
