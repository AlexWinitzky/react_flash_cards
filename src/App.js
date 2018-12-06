import React, { Component } from 'react';
import './App.css';
import CardComponent from './CardComponent';
import CardForm from './CardForm';
import { Container, Card, Button, Grid } from 'semantic-ui-react'


class App extends Component {
  state = {
    cards: [
      { id: 1, front: 'What is computers?', back: 'Wires, plastic, etc.' },
      { id: 2, front: 'What is your worst fear?', back: 'It is bears.' },
      { id: 3, front: 'How?', back: 'Or is it WHO?' },
      { id: 4, front: 'What IS NOT your worst fear?', back: 'A lack of bears.' },
      { id: 5, front: 'How many are there?', back: 'Probably 5 or 6...or 40 maybe.' },
      { id: 6, front: 'Is it good?', back: 'Occasionally, man, it is.' },
      { id: 7, front: 'What is our collective fate?', back: 'Darkness and nothingness.' },
      { id: 8, front: 'Will you click this card?', back: 'Evidently, yes.' }
    ],
    showForm: false
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addCard = (newCardData) => {
    let newCard = { id: this.getId(), ...newCardData }
    this.setState({ cards: [...this.state.cards, newCard] })
  }

  deleteCard = (id) => {
    const cards = this.state.cards.filter(card => {
      if (card.id !== id)
        return card
    })
    this.setState({ cards })
  }

  render() {
    const { cards, showForm } = this.state
    return (
      // <Container>

      <div className="App">
        <header className="App-header">
          <img src={'nicolas-cage.jpg'} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactJS Flash Cards</h1>
        </header>
        <div className="App-intro">
        <div className="Button-Style">
          <Button basic color='blue' onClick={this.toggleForm}>
            Add a New Card
          </Button>
        </div>
          <Container className='Form-Style'>
            {showForm ? <CardForm showForm={this.toggleForm} addCard={this.addCard} /> : null}
          </Container>
          <Container className="Grid-Style">
            <Grid column={4}>
              <Grid.Row>

                <Card.Group>
                  {cards.map(item => {
                    return (
                      <CardComponent key={item.id} card={item} deleteCard={this.deleteCard} />
                      )
                    })}
                </Card.Group>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </div>
                    // </Container>
    );
  }
}

export default App;
