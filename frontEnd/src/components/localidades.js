'use strict';
import React, { Component } from 'react';
import axios from 'axios'
import Localidad from './localidad'
const URL="https://futbolyabackend.herokuapp.com/";
export default class Localidades extends Component {
  constructor(props){

    super(props);
    this.state={
      localidades:[],
      tipo:'',
      localidadH:'',
      escoge:'',
      selected: false
    }
  }

  render() {
    return (      
      <div className="container">
      <h2 className="primero">¿Qué deseas hacer?</h2>
      <div className="btn-group"  data-toggle="buttons-radio">
      <button className="btn btn-primary active" onClick={()=>{this.tipo(1)}}>Buscar Equipo</button>
      <button className="btn active" onClick={()=>{this.tipo(2)}}>Reclutar Equipo</button>
      </div>
      <br></br>
      <br></br>
      <h2 className="loc">{this.state.localidadH}</h2>
      <p className="escoge">{this.state.escoge}</p>
      <ul>
      <div className="recipeList">
      {this.state.localidades.map(localidad => {
        return (
          <li key={localidad._id}>
          <Localidad localidad={localidad} reservasL={this.reservasL.bind(this)}/>
          </li>
          );
      })}
      </div>
      </ul>
      </div>
      );
    }

    tipo(num)
    {
      this.obtenerLocalidades();
      var tip=num===1?'Busca':'Recluta';
      this.setState({
        tipo: tip,
        escoge:'Escoge tu localidad:',
        localidadH:'Localidades'});

      if(this.state.selected){
        document.getElementsByClassName('oculto')[0].style.display='none';
        this.setState(
        {
          selected:false
        });
      }
       document.getElementsByClassName('infoReserva')[0].style.display='none';
    }

    reservasL(num)
    {
      this.props.obtenerReservas(this.state.tipo, num);
      if(!this.state.selected){
        document.getElementsByClassName('oculto')[0].style.display='block';
        this.setState(
        {
          selected:true
        });
      }
    }

    obtenerLocalidades() {
      axios.get(URL+ "localidades")
      .then(response => {
        this.setState({
          localidades: response.data
        })
      })
    }

  }
