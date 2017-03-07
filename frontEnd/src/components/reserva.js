'use strict';
import React, { Component } from 'react';

/*Considero que  tienen los componentes bien definidos, solo que les falta un poco unirlo todo y hacer uso del backend 
  para consumir los servicios y desplegarlos segun el usuario*/


export default class Reserva extends Component {
  render(){
      return(
        <div className='container reserva'>
          <div className='reservaI blanco'>
            <h4>
              Cancha: Fut 5
            </h4>
            <p>
              Precio: $2000
              <br></br>
              Cupos: 2
              <br></br>
              Hora: 5:00pm
            </p>
          </div>
          <div className='reservaD'>
            <div className="fotoSitio">
              <img src="../style/img/cancha.jpg" className="img-responsive imgCancha" alt="fotoCancha"></img>
            </div>
            <div>
              <button className="btn btn-default">Reserva un Cupo</button>
            </div>
          </div>
        </div>
      )
    }
}
