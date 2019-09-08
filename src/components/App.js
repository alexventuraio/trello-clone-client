import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';

import './App.css';

const App = props => {
  const { lists } = props;

  const onDragEnd = () => {
    // the only one that is required
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h2>Hello World</h2>
        <div style={styles.listContainer}>
          {lists.map(list => (
            <TrelloList
              key={list.id}
              listId={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    </DragDropContext>
  );
};

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
};

const mapStateToProps = state => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
