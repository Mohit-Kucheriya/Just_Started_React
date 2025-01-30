import React from 'react';
import PropTypes from 'prop-types';

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2: 2
        }
        console.log(this.props.title + "Constructor")

    }

    componentDidMount() {
        console.log(this.props.title + "ComponentDidMount")
    }
    render() {
        console.log(this.props.title + "Render")

        const { title, name } = this.props
        const { count } = this.state
        return (
            <div className="user-card">
                <h3>{title}</h3>
                <p>Count: {count}</p>
                {/* <p>Count2: {count2}</p> */}
                <button className='increment-btn' onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        //  count2: this.state.count2 + 2 
                    })
                }}>Increment</button>
                <p>Name: {name}</p>
                <p>Emali: kuche@gmail.com</p>
                <p>Phone: +91 9876543210</p>
                <p>Address: Jalgaon, India</p>
            </div>
        )
    }
}
UserClass.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string
};

export default UserClass;

/*

NOTE - Whenever ther wil be any changes in the state of the class component, the component will re-render i.e. 
    render() method will be called again i.e. reconciliation will happen.

*/