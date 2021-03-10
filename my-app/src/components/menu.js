import React from "react";
import { ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menus=()=>{
    return(
      <ListGroup>
          <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
          <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add course</Link>
          <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>View course</Link>
          <Link className="list-group-item list-group-item-action" tag="a" to="/about" action>About</Link>
          <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact</Link>
      </ListGroup>
    )
}
export default Menus;