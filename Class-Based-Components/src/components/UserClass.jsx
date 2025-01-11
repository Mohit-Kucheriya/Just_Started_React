import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2: 2
        }
    }
    render() {

        const { title, name } = this.props
        const { count, count2 } = this.state
        return (
            <div className="user-card">
                <h3>{title}</h3>
                <p>Count: {count}</p>
                <p>Count2: {count2}</p>
                <button className='increment-btn' onClick={() => {
                    this.setState({
                         count: this.state.count + 1,
                         count2: this.state.count2 + 2 
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

export default UserClass;