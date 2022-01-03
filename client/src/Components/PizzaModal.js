import React  from 'react'
import {Modal} from 'react-bootstrap'

export default function PizzaModal({props}) {
    console.log()
    return (
        <div>
            <Modal show = {props.show} >
  <Modal.Header >
    <Modal.Title>{props.pizza.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <img src={props.pizza.image} alt="" />
    <p>{props.pizza.description}</p>
  </Modal.Body>

  <Modal.Footer>
    <button className="btn"onClick={props.handleClose}>Close</button>
  </Modal.Footer>
</Modal>
        </div>
    )
}

