import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

class TrelloActionButton extends Component {
  state = {
    formOpen: false,
    text: '',
  };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = e => {
    this.setState({ formOpen: false });
  };

  handleInputChange = e => {
    this.setState({ text: e.target.value });
  };

  renderForm = () => {
    const { list } = this.props;
    const buttonTitle = list ? 'Add List' : 'Add Card';
    const placeholder = list
      ? 'Enter list title...'
      : 'Enter a title for this card...';

    return (
      <div>
        <div
          style={{
            minHeight: 55,
            padding: '6px 10px 2px',
            backgroundColor: '#fff',
            margin: 10,
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: 'none',
              width: '100%',
              overflow: 'hidden',
              outline: 'none',
              border: 'none',
            }}
          />
        </div>
        <div style={styles.formButtonGroup}>
          <button
            style={{
              color: 'white',
              backgroundColor: '#5aac44',
              margin: 10,
              height: 30,
            }}
          >
            {buttonTitle}
          </button>
          <icon style={{ marginLeft: 8, cursor: 'pointer', fontSize: 25 }}>
            &times;
          </icon>
        </div>
      </div>
    );
  };

  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? 'Add another list' : 'Add another card';
    const localStyles = {
      actionButton: {
        opacity: list ? 1 : 0.5,
        color: list ? 'white' : 'inherit',
        backgroundColor: list ? 'rgba(0,0,0,.15)' : 'inherit',
        ...styles.openFormButtonGroup,
      },
    };

    return (
      <div onClick={this.openForm} style={localStyles.actionButton}>
        <icon>+ </icon>
        <span>{buttonText}</span>
      </div>
    );
  };
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openFormButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
};

export default TrelloActionButton;
