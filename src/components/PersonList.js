

import React from 'react'
import axios from 'axios'

class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res);
        this.setState(
          {
            persons: res.data
          }
        )
      })
  }

  render() {
    let tmpDate = new Date();

    return (
      <div>
      <p>{tmpDate.toString()}</p>
        <ul>
          {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
        </ul>
      </div>
    )
  }

}

export default PersonList