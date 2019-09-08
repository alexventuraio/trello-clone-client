import React from 'react';

const styles = {
  card: {
    backgroundColor: '#fff',
    border: '1px solid black',
    borderRadius: 3,
    margin: '10px',
  },
};

const TrelloCard = ({ text }) => {
  return <div style={styles.card}>{text}</div>;
};

export default TrelloCard;
