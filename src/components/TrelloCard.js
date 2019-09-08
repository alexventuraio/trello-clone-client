import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const styles = {
  card: {
    backgroundColor: '#fff',
    border: '1px solid black',
    borderRadius: 3,
    margin: '10px',
  },
};

const TrelloCard = ({ index, id, text }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={styles.card}>{text}</div>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
