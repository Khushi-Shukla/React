import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../App.css'
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

    renderComments(comments){
        const coms=comments.map((c)=>{
          return(
            
                <li key={c.id}>
                    <p>
                    {c.comment}
                   </p>
                   <p> --{c.author} {c.date}</p>
               </li>
             );
     });

     return(
        
          <div className="container">

              <h3> Comments</h3>
              <ul class="list-unstyled" id="list">
             {coms}
             </ul>
              
          </div>
             
        
     );
    }
                           

    render(){
        // const dish=this.props.selectedDish;
        return(
            <div className="container">
                <div className="row">
                    <div className="row col-md">
                    {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="row col-md">
                    {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
                
            </div>
       
        );
    }
    
}
export default DishDetail;