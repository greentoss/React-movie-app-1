import React from "react"

class MovieItem extends React.Component {
    constructor() {
        super();

        this.state = {
            WillWatch : false
        };
    }

    render () {
        const {movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch} = this.props;
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                        {this.state.WillWatch === true ? (
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={()=>{
                                  this.setState({
                                      WillWatch : false
                                  });
                                  removeMovieFromWillWatch(movie);
                              }}
                            > Remove Will Watch </button>
                        ) : (
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={()=>{
                                  this.setState({
                                      WillWatch : true
                                  });
                                  addMovieToWillWatch(movie);
                              }}
                            > Add Will Watch </button>
                        )}
                    </div>
                    <button onClick={removeMovie.bind(null, movie)}>
                        Delete Movie
                    </button>
                </div>
            </div>
        );
    }
}

// const MovieItem = (props) => {
//     //console.log(props);
//     const {movie, removeMovie, addMovieToWillWatch} = props;
//     return (
//         <div className="card">
//             <img
//                 className="card-img-top"
//                 src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
//                 movie.poster_path}`}
//                 alt=""
//             />
//             <div className="card-body">
//                 <h6 className="card-title">{movie.title}</h6>
//                 <div className="d-flex justify-content-between align-items-center">
//                     <p className="mb-0">Rating: {movie.vote_average}</p>
//                     <button
//                         type="button"
//                         className="btn btn-secondary"
//                         onClick={addMovieToWillWatch.bind(null, movie)}
//                     >
//                         Will Watch
//                     </button>
//                 </div>
//                 <button onClick={removeMovie.bind(null, movie)}>
//                     Delete Movie
//                 </button>
//             </div>
//         </div>
//     );
// };

export default MovieItem;

