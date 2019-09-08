import { CONSTANTS } from '../actions';

const initialState = [
  {
    title: 'Column One',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'Card 1',
      },
      {
        id: `card-${1}`,
        text: 'Card 2',
      },
    ],
  },
  {
    title: 'Column Two',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'Card 1',
      },
      {
        id: `card-${3}`,
        text: 'Card 2',
      },
      {
        id: `card-${4}`,
        text: 'Card 3',
      },
      {
        id: `card-${5}`,
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
        id: `list-${Math.floor(Math.random() * 100 + 1)}`,
      };

      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const lists = [...state];
      const newCard = {
        text: action.payload.text,
        id: `card-${Math.floor(Math.random() * 1000 + 1)}`,
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
