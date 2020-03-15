import React from "react";
import { moviesData } from "..//moviesData";
//{moviesData}  because in moviesData.js not export default
// in buttom but export const moviesData in the beginning
import MovieItem from "./MovieItem"

//console.log(moviesData);
//let title = 'Hello ReactWarriors!';

// UI = fn(state, props)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
        //added moviesData to state object
      moviesWillWatch : []
    }
  }

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter(function (item) {
        return item.id !== movie.id;
    });
    console.log(updateMovies);
    //this.state.movies = updateMovies;
    this.setState({
        movies: updateMovies
    })
    //rewrite state to updateMovies
  };

  addMovieToWillWatch = movie => {
    console.log(movie);
    //this.state.moviesWillWatch.push(movie);
    //add chosen movie to obj

    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);
      //the same
    //const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
        moviesWillWatch : updateMoviesWillWatch
    })
  };

  removeMovieFromWillWatch = (movie) => {
      const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
          return item.id !== movie.id;
      });
      this.setState({
          moviesWillWatch: updateMoviesWillWatch
      });
      //rewrite state to updateMovies
  };

  render() {
    console.log("render", this.state, this.temp);
    // return <div>{moviesData[0].title}</div>;
    //return <div>{this.state.movies[0].title}</div>;
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map((movie)=>{
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                 );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    )
  };
}



// function App() {
//   return <div>{moviesData[0].title}</div>;
// }

//stateless function,  glypaja

export default App;
