import React from 'react';
import { Card, Button } from 'semantic-ui-react'


const styles = {
  cardStyle: {
    margin: '5px',
    height: '200px',
    width: '250px',
    backgroundColor: 'beige'
  },
  textStyle: {
    margin: '60px',
    color: 'blue'
  },
  buttonStyle: {
    // height: '10px',
    // width: '10px',
    // marginLeft: '8px',
    // marginTop: '-20px'
  }
}

class CardComponent extends React.Component {
  state = { showFront: true };

  toggleCard = () => {
    this.setState({ showFront: !this.state.showFront });
  }

  render() {
    const { card, deleteCard } = this.props
    return (
      <div>
        <Card style={styles.cardStyle} onClick={this.toggleCard} >   
        <Card.Content extra>
        <div style={styles.textStyle}>
          {this.state.showFront ? card.front : card.back }
        </div>
        </Card.Content>
        <Card.Description extra>
        <div style={styles.buttonStyle}>
        <Button icon='trash' basic color='red' onClick={() => deleteCard(card.id)}></Button>
        </div>
        </Card.Description>
        </Card>
      </div>
    )
  }
}

export default CardComponent
