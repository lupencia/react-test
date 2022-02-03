
import React from 'react';
import img from './assets/instagram-1.png';
import Description from './Description.js';
import Avatar from './Avatar.js';

const Title = () => {
  return <h1>Hola mundo</h1>
}


const Date = () => {
  return '10/4/2022';
}

const App = () => {

  return (
    <React.Fragment>
      <Title/>
      <Avatar borderRadius = '50%'
              width= '70px'
              height = '70px'
              ttle = 'mi primer avatar'
              src = {img}/>
      <section className="item-container">
        <img src={img} className="image" alt="personal" />
        <Description color='blue' message='Estamos trabajando'/>
        <Description color='purple' message='Een un curso de aprendizaje de react'/>
        <Description color='green' message='el cual me va a salir bien'/>
        <Description color='red' message='porque soy válida, nteligente, lista'/>
        <span className="valgo la pena">
          <Date/>
        </span>
      </section>
    </React.Fragment>
  );
}

export default App;
