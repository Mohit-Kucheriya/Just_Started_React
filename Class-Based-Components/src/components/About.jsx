// import User from "./User"
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("About i.e. Parent Constructor");
    }

    componentDidMount() {
        console.log("About i.e. Parent ComponentDidMount");
    }
    render() {
        console.log("About i.e. Parent Render");
        return (
            <div className="about-page">
                <h1>About Page</h1>
                <div className="container">
                    <UserClass title="First Child" name="Mohit Kucheriya" />
                    <UserClass title="Second Child" name="Harry Potter" />
                </div>
            </div>
        );
    }
}
export default About;
