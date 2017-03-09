  'use strict';
  import React, { Component } from 'react';
  import axios from 'axios'
  const URL="https://futbolyabackend.herokuapp.com/";
  /*Considero que  tienen los componentes bien definidos, solo que les falta un poco unirlo todo y hacer uso del backend
    para consumir los servicios y desplegarlos segun el usuario*/


  export default class Reserva extends Component {
      constructor(props)
      {
        super(props);
        this.state=
          {
            cancha:'',
            precio:-1,
            cupos: -1,
            hora:'4:00 pm'
          }
      }
    render(){
        return(
          <div className='container reserva'>
            <div className='reservaI blanco'>
              <h4>
                Cancha: {this.props.reserva.id_cancha}
              </h4>
              <p>
                Precio: ${this.props.reserva.precio}
                <br></br>
                Cupos: {this.props.reserva.cupos}
                <br></br>
                Hora: {this.state.hora}
              </p>
            </div>
            <div className='reservaD'>
              <div className="fotoSitio">
                <img src="./style/img/cancha.jpg" className="img-responsive imgCancha" alt="fotoCancha"></img>                              </div>
              <div>
                <button className="btn btn-default" >Reserva un Cupo</button>
              </div>
            </div>
          </div>
        )
      }

      reservarCupo(){

      }
  }
