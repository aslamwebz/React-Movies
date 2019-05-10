import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import { API_KEY,IMAGE_PATH } from '../actions/config';
import Card from './Card'
import GenreCard from './GenreCard'


const MovieDetails = (props) => {

    const [movie, setMovie] = useState([])
    const [similar, setSimilar] = useState([])
    const [genres, setGenres] = useState([])


    useEffect(() => {
        getDetails()
        getSimilar()
    }, [props.match.params.id])

    const getDetails = () => {
        const movieURL = `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}&language=en-US`
        Axios.get(movieURL)
        .then(data => {
            console.log(data.data)
            setMovie(data.data)
            setGenres(data.data.genres)
        })
        .catch(err => console.log(err))
    }

    const getSimilar = () => {
        const similarUrl = `https://api.themoviedb.org/3/movie/${props.match.params.id}/similar?api_key=${API_KEY}&language=en-US&page=1`
        Axios.get(similarUrl)
        .then(data => {
            // console.log(data.data.results)
            setSimilar(data.data.results)})
        .catch(err => console.log(err))
    }


    const url = `${IMAGE_PATH+movie.poster_path}`

    // const genres = movie.genres

    const content = (
        
        <React.Fragment>
            <div className="container-fluid">
                <div className="col-md-10 offset-md-1" >
                    <div className="row" id="movieDetailsPane">
                        <div className="col-md-4">
                            <img src={url} className="" alt="" height="600px"/>
                        </div>
                        <div className="col-md-8">
                            <div>
                                <h1> {movie.title}</h1>
                                <h3>{movie.tagline}</h3>
                                <h3 >{genres.map(genre => (
                                    <GenreCard data={genre} key={genre.name} />
                                ))} </h3>
                                <h5> {movie.vote_average} / 10 </h5>
                                <h5>Release Date : {movie.release_date} </h5>
                                <h5>Runtime : {movie.runtime} M</h5>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>

              
        <div className="container-fluid p-1">
            <div className="col-md-12 line">
                <h1>Similar Movies</h1>
            </div>
                <div className="col-md-12">
                    <div className="row">
                        {similar.map(simMovie => (
                            <Card data={simMovie} key={simMovie.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )

    return content

}

export default MovieDetails