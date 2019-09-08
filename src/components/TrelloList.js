import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: '100%',
    marginRight: 10,
  },
};

const TrelloList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={listId.toString()}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              index={index}
              text={card.text}
              id={card.id}
            />
          ))}
          <TrelloActionButton listId={listId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TrelloList;
