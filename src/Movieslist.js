import React,{useState} from 'react';
import Moviescard from './Moviescard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

const Movieslist = ({movies,movie,addMovie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>

          <Button onClick={handleShow} variant="success" id="bt" >Add Movie</Button>{' '}
      <Add addMovie={addMovie} show={show} handleClose={handleClose} />
         {movies.map(el => <Moviescard movie={el} />)}
         
         
   
    </div>
  )
}

export default Movieslist;