import React, { Component } from 'react';

class ToyCard extends Component {

  // componentWillUnmount(){
    // for after deleting a toy?  
  // }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button onClick={() => this.props.addLike(this.props.toy.id, this.props.toy.likes)} className="like-btn">Like {'<3'}</button>
        <button onClick={() => this.props.deleteToy(this.props.toy.id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
