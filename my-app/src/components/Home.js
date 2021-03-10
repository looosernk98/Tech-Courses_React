import React from "react";
import { Jumbotron, Button } from 'reactstrap';

const Home =()=>{
    return (
        <div>
          <Jumbotron className="text-center">
              <h1>Learn Code with Niranjan</h1>
              <p> This is software created by Niru using React for front end and spring boot for backend </p>
              <div>
                  <Button color="primary">read more...</Button>
              </div>
          </Jumbotron>
        </div>
    )
};
export default Home;