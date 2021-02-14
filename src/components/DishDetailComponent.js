import React, { Component } from 'react';
import { Card, CardImg, Media, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />
                     <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
                         <CardText>{dish.description}</CardText>
                     </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        // const dish=this.props.selectedDish;
        return(
            <div className="container">
                <div className="row">
                    <div className="row col-md">
                    {this.renderDish(this.props.selectedDish)}
                    </div>
                    
                </div>
                
            </div>
       
        );
    }
    
}
export default DishDetail;