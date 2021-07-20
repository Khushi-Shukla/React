import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Col, Row, Modal, ModalHeader, Button, Label, ModalBody  } from "reactstrap";
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form';
import { LoadingComponent } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

 function RenderDish({dish}) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <FadeTransform
                    in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card>
                            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments, postComment, dishId}) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = <Stagger in>
        {comments.map((comment) => {
            return (
                <Fade in>
                <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
                </Fade>
            );
        })}
        </Stagger>
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
                {/* <CommentForm /> */}
                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        )
    }

    const maxLength = (len) => (val) => !(val) || (val.length<=len);
    const minLength = (len) => (val) => (val) && (val.length>=len);
    function  DishDetail ({dish, comments, postComment, isLoading, errMess}){
        // const dish = dish
        if(isLoading)
        return(
            <div className="container">
                <div className="row">
                    <LoadingComponent />
                </div>
            </div>
        );
        else if(errMess){
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        }
        // console.log(dish);
        
       
        else if(dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <RenderDish dish={dish} />
                    <RenderComments comments={comments}
                     postComment={postComment}
                     dishId={dish.id}
                     />
                    
                    {/* <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id} /> */}
                </div>
            </div>
          
        );
        else{
            return (<div></div>);
        }
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
            this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
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
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={10}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" placeholder="Your Name" name="author" className="form-control" 
                                    validators={{
                                        minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />
                                   <Errors className="text-danger" model=".author" show="touched"
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