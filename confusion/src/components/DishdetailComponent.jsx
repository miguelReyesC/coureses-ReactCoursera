import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
    if (comments != null) {
        return (
            <div className="container">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((element, index) => {
                        return (
                            <li key={index}>
                                <p>{element.comment}</p>
                                <p>{`-- ${
                                    element.author
                                } , ${new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit",
                                }).format(
                                    new Date(Date.parse(element.date))
                                )}`}</p>
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

const DishDetail = (props) => {
    const dish = props.selectedDish;
    if (dish != null) {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    <RenderDish dish />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    <RenderComments comments={dish.comments} />
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default DishDetail;
