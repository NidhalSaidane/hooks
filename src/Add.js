import React, { useState } from 'react';
import {Modal,Button,Form,Row,Col} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

const Add = ({show,handleClose,addMovie,}) => {
    const [newMovie,setNewMovie]=useState({
      title:"",
      duration:"",
      genre:"",
      description:"",
      rate:1,
      img:""

    })
    const onStarClick=(nextValue, prevValue, name)=> {
        setNewMovie({...newMovie,rate:nextValue})
        // setRate(nextValue)
      }
      const handleChange=(e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.Value})
      }
  return (
    <div className='adding'>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" onChange={handleChange} name="title" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="password" placeholder="Image URL" onChange={handleChange} name="img"/>
        </Form.Group>
      </Row>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          Value={newMovie.rate}
          onStarClick={onStarClick}
        />

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleChange} name="decription" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Duration</Form.Label >
          <Form.Control onChange={handleChange} name="duration"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Genre</Form.Label>
          <Form.Control as="select" defaultValue="Choose genre" onChange={handleChange} name="genre">
            <option>Action</option>
            <option>Animation</option>
            <option>Adventure</option>
            <option>Science fiction</option>
          </Form.Control>
        </Form.Group>

        
      </Row>

    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(newMovie); handleClose()} }>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add