import React, { Component } from 'react';
import axios from 'axios';
const URL="https://futbolyabackend.herokuapp.com/";

export default class Localidad extends Component {
  	
  	constructor(props)
  	{
      
  		super(props);
      this.state={
        id:-1,
        selected:false
      }
  	}

  	render()
  	{
  		return(
  			<button className="btn btn-success" onClick={()=>this.localidadId(this.props.localidad._id)}>{this.props.localidad.ubicacion}</button>)
  	}
    
  	localidadId(loc)
  	{
      this.props.reservasL();
  	}

}