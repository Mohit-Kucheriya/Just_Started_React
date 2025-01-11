import { useState } from "react"

const User = (props) => {
    const [count] = useState(0)

    const {title} = props
    return (
        <div className="user-card">
            <h3>{title}</h3>
            <p>Count: {count}</p>
            <p>Name: Mohit Kucheriya</p>
            <p>Emali: kuche@gmail.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: Jalgaon, India</p>
        </div>
    )
}

export default User