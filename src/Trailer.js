import React from "react";
import {useParams, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';



const Trailer = ({movies}) => {
    const params = useParams() ; 
    const navigation = useNavigate() ; 
    const movie = movies.find(el=>el.id==params.id)
   
    return (
        
     <div className="trailer">
        <div className="description">
        <h1 style={{color: "orange",fontSize:"50px",fontFamily:"fantasy"}}>{movie.title}</h1>
        <p style={{color: "white",fontSize:"15px"}}>{movie.descriptions}</p>
        <Button   variant="danger" onClick={()=>navigation(-1) }>Go Back </Button>
        </div>
        

        <div className="vid">{movie.trailer}</div>
        
    </div>
    )
}


export default Trailer ;