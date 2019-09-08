import React from 'react';
import { connect } from 'react-redux';

import TrelloList from './TrelloList';

import './App.css';

const App = props => {
  const { lists } = props;

  return (
    <div className="App">
      <h2>Hello World</h2>
      <div style={styles.listContainer}>
        {lists.map(list => (
          <TrelloList title={list.title} cards={list.cards} />
        ))}
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
