import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount(){
    this.getToys()
  }

  getToys = () => {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toyList => this.setState({toys:toyList}))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  newToy = (toyData) => {
    console.log(toyData)
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({toyData})
    })
    .then(res => res.json())
    .then(data => this.setState({toys: data}))
  }

  deleteToy = (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'DELETE'
    })
    .then(this.getToys)
  }

  addLike = (id, currLikes) => {
    let newLikes = currLikes + 1
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({
        likes: newLikes
      })
    })
    .then(this.getToys)
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm newToy={this.newToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer addLike={this.addLike} deleteToy={this.deleteToy} toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
