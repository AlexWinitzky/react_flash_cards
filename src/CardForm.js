import React from 'react'
import { Form } from 'semantic-ui-react'


class CardForm extends React.Component {
  state = { front: '', back: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCard(this.state)
    this.setState({ front: '', back: '' })
    this.props.showForm()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            required
            placeholder="Add A Question"
            name='front'
            value={this.state.front}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            placeholder="Add An Answer"
            name='back'
            value={this.state.back}
            onChange={this.handleChange}
          />
          <Form.Button icon='plus' basic color='green'></Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default CardForm;