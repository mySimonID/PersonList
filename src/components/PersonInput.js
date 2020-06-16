

import React from 'react'
import axios from 'axios'

class PersonInput extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      id:1
    }

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text"></label>
          <input type="text" name="text" onChange={this.handleChange} value={this.state.name} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }

}

export default PersonInput