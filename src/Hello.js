/**
 * This is the first class that we will build using React.
 * This is a "component", therefore, it must extend React.Component.
 * All React.Component types should have a render method that returns
 * HTML-like syntax.
 *
 * WHen we want to return multiple HTML tags/lines,
 * we must wrap the lines in a <div> tag since a return method must return
 * only one thing.
 *
 * If we want to make CSS for this component, we make a file
 * called "{Name}.css" in the src folder, and we import it into this .js file.
 *
 * In react, if we want to add classes to our HTML tags, we use the "className" attribute.
 */
import React from 'react';
import './Hello.css'

class Hello extends React.Component {
    render () {
        return (
            /*
            Use the className attribute to add classes to our HTML tags.
            f1 and tc are part of the tachyon package.
             */
            <div className={"f1 tc"}>
                <h1>Hello World!</h1>
                <p>Welcome to the React framework!</p>
                <p>{this.props.greeting}</p>
                <p>My name is {this.props.name}</p>
            </div>
        );
    }
}
export default Hello;