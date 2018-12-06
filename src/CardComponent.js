import React from 'react';
import { Card, Button } from 'semantic-ui-react'


const styles = {
  cardStyle: {
    margin: '5px',
    height: '200px',
    width: '250px',
    backgroundColor: '#D5D8DC',
    boxShadow: '5px 10px',
    border: '1px solid black'
  },
  frontTextStyle: {
    margin: '60px',
    color: '#4A235A'
  },
  backTextStyle: {
    margin: '60px',
    color: '#145A32'
  }
}


class CardComponent extends React.Component {
  state = { showFront: true };

  cardTextStyle = () => {
    const { card } = this.props
    if (this.state.showFront === true) {
      return (
        <div style={styles.frontTextStyle}>
          {card.front}
        </div>
      )
    } else {
      return (
        <div style={styles.backTextStyle}>
          {card.back}
        </div>
      )
    }
  }

  toggleCard = () => {
    this.setState({ showFront: !this.state.showFront });
  }

  render() {
    const { card, deleteCard } = this.props
    return (
      <div>
        <Card style={styles.cardStyle} onClick={this.toggleCard} >
          <Card.Content extra>
            <div>
              {this.cardTextStyle()}
            </div>
          </Card.Content>
          <Card.Description extra>
            <div className='Card-Button-Style'>
              <Button icon='trash' basic color='red' onClick={() => deleteCard(card.id)}></Button>
            </div>
          </Card.Description>
        </Card>
      </div>
    )
  }
}

export default CardComponent
