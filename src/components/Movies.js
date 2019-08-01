import React, { Component } from 'react'
import '../App.css'; 

export default class Movies extends Component {
  
    onAdd = (id) => {
        const theOne = this.props.movies;
        theOne.forEach( movie => {
            if(movie.id === id){
                movie.favorite = true
            }
        })
        this.setState({
            movies: theOne
        })
    }

    onRemove = (id) => {
        const theOne = this.props.movies;
        theOne.forEach( movie => {
            if(movie.id === id){
                movie.favorite = false
            }
        })
        this.setState({
            movies: theOne
        })
    }

    render() {
        const movies = this.props.movies;
        const favorites = movies.filter(m => m.favorite === true);
        const others = movies.filter(m => !m.favorite);
        
        return (
            <div  className="DisplayMovies">
                <ul>
                {favorites.map(movie => 
                    <li>
                        <img src={movie.posterUrl} alt='Movie poster'/>
                        <button onClick = {() => this.onRemove(movie.id) }> Remove </button>
                        <p>Title : {movie.title}</p>
                        <p>Actors : {movie.actors}</p>
                        <p>Genres : {movie.genres}</p>
                        <p>Year : {movie.year}</p>
                        <p>Plot : {movie.plot}</p>
                    </li>)}
                </ul>
                
                <hr />
                
                <ul>
                {others.map(movie => 
                    <li>
                        <img src={movie.posterUrl} alt='Movie poster'/>
                        <button onClick = {() => this.onAdd(movie.id)}> Add </button>
                        <p>Title : {movie.title}</p>
                        <p>Actors : {movie.actors}</p>
                        <p>Genres : {movie.genres}</p>
                        <p>Year : {movie.year}</p>
                        <p>Plot : {movie.plot}</p>
                    </li>)}
                </ul>
            </div>
        )
    }
}
