import React, { Component } from 'react'
import './App.css';
import Movies from './components/Movies';
// import DisplayMovies from './components/DisplayMovies';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies : [],
    }
    this.showMovies();
  }

  showMovies = () => {
    fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies : data.movies
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Movies showMovies={this.showMovies} movies={this.state.movies} />
        
      </div>
    )
  }
}
