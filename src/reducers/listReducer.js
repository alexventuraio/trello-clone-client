import { CONSTANTS } from '../actions';

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
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload.title,
        cards: [],
        id: Math.floor(Math.random() * 100 + 1),
      };

      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const lists = [...state];
      const newCard = {
        text: action.payload.text,
        id: Math.floor(Math.random() * 100 + 1),
      };

      //lists[action.payload.listId].cards.push(newCard);
      lists.forEach(list => {
        if (list.id === action.payload.listId) {
          list.cards.push(newCard);
        }
      });

      return lists;
    default:
      return state;
  }
};

export default listReducer;
