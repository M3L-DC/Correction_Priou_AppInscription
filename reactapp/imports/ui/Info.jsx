import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

class Info extends Component {
  
  state = {
    title: '',
    utl: ''
  }

  handleTitle = () => {
    this.setState({
      title : event.target.value 
    });
    console.log("Title: " + this.state.title);
  }

  handleURL = () => {
    this.setState({
      url : event.target.value 
    });
    console.log("URL: " + this.state.url);
  }
  
  handleSubmit = () => {
    Links.insert({
      title: this.state.title,
      url: this.state.url,
      createdAt: new Date()
    });
    console.log(this.state.title + "; " + this.state.url);
  }
  
  handleRemove = () => {
    //Links.remove( this.state.title, this.state.url );
  }

    /* en plus lourds
  constructor () {
    super();
    this.state = {
      link: ''
    }
    //Declaration des methodes et fonctions
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
   * Recupère le texte de l'input
   *
  handleText(e) {
    this.setState({
      link : e.target.value 
    });
  }
  
  /*
   * insert dans la bd pour changer le statut de title 
   * et lui donner la valeur recupéré dans l'input
   *
  handleSubmit(){
    Links.insert({
      title: this.state.link
    });
  }
  */

  render () {
    const links = this.props.links.map(
      link => this.makeLink(link)
    );

    return (
      <div>
        <h2>Add a new link</h2>
        <input onChange={ this.handleTitle } name="title" placeholder="Title"></input>  
        <input onChange={ this.handleURL } name="url" placeholder="URL"></input>  
        <button type="submit" onClick={ this.handleSubmit }>ADD</button>
        <button type="submit" onClick={ this.handleRemove }>Remove</button>
        <h2>Learn Meteor!</h2>
        <ul> { links }</ul>
      </div>
    );
  }

  makeLink(link) {
    return (
      <li key={link._id}>
        <a href={link.url} target="_blank">{link.title}</a>
      </li>
    );
  }
}

export default InfoContainer = withTracker(() => {
  return {
    links: Links.find().fetch(),
  };
})(Info);
