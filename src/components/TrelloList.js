import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 10px;
`;

const TrelloList = ({ title, cards, listId, index }) => {
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={listId.toString()} type="card">
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                  />
                ))}
                {provided.placeholder}

                <TrelloActionButton listId={listId} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

export default TrelloList;
