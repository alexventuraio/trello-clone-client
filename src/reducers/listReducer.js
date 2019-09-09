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
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
      } = action.payload;
      const newState = [...state];

      //Dragging lists around
      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1);

        newState.splice(droppableIndexEnd, 0, ...list);

        return newState;
      }

      // DnD in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // DnD in another list
      if (droppableIdStart !== droppableIdEnd) {
        //Find the list where drag happened
        const listStart = state.find(list => droppableIdStart === list.id);
        //Pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        //Find the list where drag ended
        const listEnd = state.find(list => droppableIdEnd === list.id);

        //Put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    default:
      return state;
  }
};

export default listReducer;
