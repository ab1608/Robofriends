import React from "react";

/*
This syntax allows the components to receive properties and use them
in the JSX.
 */
const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className={'bg-light-green dib rb3 br3 pa3 ma2 grow bw2 shadow-4'}>
            <img alt={'robot'} src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}


export default Card;

