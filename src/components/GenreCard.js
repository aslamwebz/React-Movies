import React from 'react'

const GenreCard = (genre) => {
    return (
        <React.Fragment>
           <span className="badge badge-secondary" id="genreCard">{genre.data.name}</span>
        </React.Fragment>
    )
}

export default GenreCard