import { useEffect, useState } from 'react'
import SkeletonProfile from '../skeleton/SkeletonProfile';
const User = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const data = await res.json()
            setUser(data)
        }, 5000);
    })

    return (
        <div className="user">
            <h2>User Details</h2>
            {user && (
                <div className='user-details'>
                    <h3>Name: {user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>

            )}

            {!user && <SkeletonProfile/>}

        </div>
    )
}

export default User