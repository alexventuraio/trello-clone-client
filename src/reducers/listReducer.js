import { CONSTANTS } from '../actions';

const initialState = [
  {
    title: 'Column One',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'Every with in order to drag a <Draggable />.',
      },
      {
        id: `card-${1}`,
        text: 'A drag handle can be the child of an interactive element.',
      },
    ],
  },
  {
    title: 'Column Two',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'Proper semantics for accessibility are added to set.',
      },
      {
        id: `card-${3}`,
        text: 'draggableId: A required DraggableId(string).',
      },
      {
        id: `card-${4}`,
        text: 'A required number that matches the order of the list.',
      },
      {
        id: `card-${5}`,
        text: 'The index needs to be unique within a consecutive.',
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
