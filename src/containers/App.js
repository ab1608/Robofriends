import React, { useState, useEffect} from 'react';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import ScrollBox from '../components/ScrollBox'
import ErrorBoundary from "../components/ErrorBoundary";
import '../App.css'



/*
The App is the only thing that can change the state.
When all the state changes have been processed, it then passes
down the information to the child components.
It is now a "Smart" components. Smart components are made as classes
and, they are known as Containers.

Components that do not modify the state of other components are pure components.
 */
function App() {

    // Declare two state variables using Hooks
    const [allRobots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');


    // Similar to componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    },[])


    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = allRobots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return !allRobots.length ?
        <h1>Loading</h1> :
         (
            <div className={'tc'}>
                <h1 className={'f1'}>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}></SearchBox>
                <ScrollBox>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}></CardList>
                    </ErrorBoundary>
                </ScrollBox>
            </div>
        );
}

export default App;