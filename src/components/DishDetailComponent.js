import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Col, Row, Modal, ModalHeader, Button, Label, ModalBody  } from "reactstrap";
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form';

 function RenderDish({dish}) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments}){
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                    
                </li>
               
            )
            
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
                <CommentForm />
            </div>
        )
    }

    const maxLength = (len) => (val) => !(val) || (val.length<=len);
    const minLength = (len) => (val) => (val) && (val.length>=len);
    const  DishDetail = (props)=>{
        const dish = props.dish

        console.log(dish);
        
        if (dish == null) {
            return (<div></div>);
        }
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        );
    }

    class  CommentForm extends Component{
        constructor(props){
            super(props);
            this.state={
                isModalOpen:false
            };
            this.toggleModal=this.toggleModal.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
        }

        toggleModal(){
           this.setState({
            isModalOpen: !this.state.isModalOpen
           });
           console.log("i")
        }

        handleSubmit(values){
            this.toggleModal();
            console.log("Current State is: "+ JSON.stringify(values))
            alert("Current State is: "+ JSON.stringify(values))
            
        }

       render(){
        
        return (
            <div className="container">
                <div className="row">
                        <Button onClick={this.toggleModal} outline><span className="fa fa-sm fa-pencil"> Submit Comment</span></Button>                        
                </div>
 
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={10}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" value="1" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="username" md={10}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".username" placeholder="Your Name" name="username" className="form-control" 
                                    validators={{
                                        minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />
                                   <Errors className="text-danger" model=".username" show="touched"
                                   messages={{
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less',
                                   }} />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={10}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" rows="6" name="comment" className="form-control">
                                    </Control.textarea>
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                
            </div>
        );
       }
    }


export default DishDetail;