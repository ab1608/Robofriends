import React from 'react';
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
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allRobots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({allRobots: users})
            });
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const { allRobots, searchField } = this.state;
        const filteredRobots = allRobots.filter(robot =>
            robot.name.toLowerCase().includes(searchField.toLowerCase()));

        if (!allRobots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className={'tc'}>
                    <h1 className={'f1'}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}></SearchBox>
                    <ScrollBox>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}></CardList>
                        </ErrorBoundary>
                    </ScrollBox>
                </div>
            );
        }
    }
}

export default App;

