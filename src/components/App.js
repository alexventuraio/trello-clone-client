import React from 'react';
import { connect } from 'react-redux';

import TrelloList from './TrelloList';
import TrelloActionButton from './TrelloActionButton';

import './App.css';

const App = props => {
  const { lists } = props;

  return (
    <div className="App">
      <h2>Hello World</h2>
      <div style={styles.listContainer}>
        {lists.map(list => (
          <TrelloList key={list.id} title={list.title} cards={list.cards} />
        ))}
        <TrelloActionButton list />
      </div>
    </div>
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
