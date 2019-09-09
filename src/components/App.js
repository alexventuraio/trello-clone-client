import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';
import { sort } from '../actions';

import './App.css';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const App = props => {
  const { lists } = props;

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h2>Hello World</h2>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map((list, index) => (
                <TrelloList
                  key={list.id}
                  listId={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}

              <TrelloActionButton list />
            </ListContainer>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
