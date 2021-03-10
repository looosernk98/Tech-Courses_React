import React, { Fragment } from "react";
import {Form ,Button,Container, FormGroup, Input} from "reactstrap";

const AddCourse=()=>{
     return (
         <Fragment>
             <h2 className="text-center">Fill Course Detail</h2>
             <Form>
                 <FormGroup>
                   <label for="userId">Course Id</label>
                   <Input type="text" name="userId" placeholder="Enter here" id="userId"/>
                 </FormGroup>

                 <FormGroup>
                   <label for="title"> Course title</label>
                   <Input type="text" name="title" placeholder="Enter title here" id="title"/>
                 </FormGroup>
                   
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea"
                    placeholder="Enter description here"
                    id="description"
                    style={{height:150}}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning ml-3" >Clear</Button>
                </Container>

             </Form>
         </Fragment>
     )
}

export default  AddCourse;