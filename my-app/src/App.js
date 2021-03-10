
import {Button,Container,Row,Col} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Course from "./components/course";
import AllCourse from  "./components/AllCourses"
import AddCourse from './components/AddCourse';
import Header from "./components/header";
import Menus from "./components/menu";
import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
       <ToastContainer/>
       <Router>
      
      
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>

            <Col md={8}>
              <Route path="/" component={Home} exact/>
              <Route path="/add-course" component={AddCourse} exact/>
              <Route path="/view-course" component={AllCourse} exact/>
              <Route path="/about" component={Home} exact/>
              <Route path="/contact" component={Home} exact/>
            </Col>
          </Row>
        </Container>
       </Router>
      
    </div>
  );
}

export default App;
