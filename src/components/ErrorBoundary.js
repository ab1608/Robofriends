import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    /*
    Lifecycle method to catch the hasError.
     */
    // componentDidCatch(error, errorInfo) {
    //     this.setState({hasError: true})
    // }

    render() {
        if (this.state.hasError) {
            return <h1>Sorry. That wasn't supposed to happen!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;