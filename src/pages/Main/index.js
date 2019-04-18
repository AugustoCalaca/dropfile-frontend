import React, { Component } from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    newBox: '',
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();

    const response = await api.post('boxes', {
      title: this.state.newBox
    })

    this.props.history.push(`/box/${response.data._id}`);
    console.log(response.data);
  };

  handleInputChange = (event) => {
    this.setState({ newBox: event.target.value });
  };

  render() {
    return (
      <div id="main-container"> 
        <form onSubmit={ this.handleOnSubmit } action="">
          <img src={logo} alt=""/>
          <input 
            type="text" placeholder="Create Box"
            value={ this.state.newBox }
            onChange={ this.handleInputChange }
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}