import React from 'react';

// const styles = {
//   card: { cursor: 'pointer' },
//   // complete: { color: 'grey', textDecoration: 'line-through' }
// }

// const Card = ({ id, front, back, cardClick, showFront }) => (
//   <li
//     style={ styles.card }
//     onClick={() => cardClick(id)}
//   >
//     { showFront ? 'front' : 'back' }
//   </li>
// )

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Front' : 'Back'}
      </button>
    );
  }
}

export default Toggle
