import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((element) => {
                            return (
                                <li>
                                    <p>{element.comment}</p>
                                    <p>{`-- ${element.author} , ${element.date}`}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        const dish = this.props.selectedDish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default DishDetail;
