import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from "react-router-dom"


const Moviescard = ({movie,movies,}) => {
  return (
    <div>
  
  <Link style={{color: "transparent"}} to={`/trailer/${movie.id}`}>
      
        <div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={movie.img} alt='img'/>
      <h1>{movie.title}</h1><StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
               />
       <br />
             
      <span class="minutes">{movie.duration}</span>
      <p class="type">{movie.genre}</p>
    </div>
    <br />
    <div class="movie_desc">
      <p class="text">
       {movie.description}
       </p>
    </div>
    
  </div>
  <div class="blur_back bright_back"></div>
</div>
</Link>
    </div>
  )
}

export default Moviescard;