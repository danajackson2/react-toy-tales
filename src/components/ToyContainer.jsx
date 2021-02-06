import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map(t => <ToyCard addLike={props.addLike} deleteToy={props.deleteToy} toy={t} key={t.id}/>)}
    </div>
  );
}

export default ToyContainer;
