import React,{useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Search = ({search,setRate,newRate}) => {
    const [rating,setRating] = useState(1)
    const onStarClick=(nextValue, prevValue, name)=> {
        setRate(nextValue);
      }
  return (
    <div className='serching'>
        <input type="text" placeholder="Search" onChange={(e) => search(e.target.value)} />
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          Value={newRate}
          onStarClick={onStarClick}
          starColor={'gold'}
        />
    </div>
  )
}

export default Search