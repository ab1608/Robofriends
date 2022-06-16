import React from 'react';
import Card from "./Card";


const CardList = (props) => {
    /*
    The array of robots has been received as an argument.
    It is defined as a parameter in index.js.
    The array of robots can be accessed using the map function and each robot
    will now return a card with its properties.
     */
    const {robots} = props;
    return (
        robots.map(robot => <Card
            id={robot.id}
            name={robot.name}
            email={robot.email}
            key={robot.id}></Card>)
    )
};

export default CardList;
