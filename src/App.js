import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Card from './Card';
import CardForm from './CardForm';

class App extends Component {
  state = {
    flashCards: [
      {id: 1, front: 'Front 1', back: 'back 1'},
      {id: 2, front: 'Front 2', back: 'back 2'},
      {id: 3, front: 'Front 3', back: 'back 3'},
    ]
  }

  handleClick = (id) => {
    const { cards } = this.state;
    this.setState({
      cards: cards.map (card => {
        if (card.id === id) {
          return {
            ...card,
            showFront: !card.front
          }
        }
        return card
      })
    })
  }
  render() {
    const {flashCards} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={'nicolas-cage.jpg'} className="App-logo" alt="logo" />
          <h1 className="App-title">React Flash Cards</h1>
        </header>
           <div className="App-intro">
            <List name="Flashcard List" items={flashCards} />
            <CardForm />
          </div>
      </div>
    );
  }
}

export default App;
