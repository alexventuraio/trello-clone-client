import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 10px;
`;
const Card = styled.div`
  background-color: #fff;
  border: 1px solid black;
  border-radius: 3px;
  margin: 10px;
`;

const TrelloCard = ({ index, id, text }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>{text}</Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard;
