// import User from "./User"
import UserClass from "./UserClass"
const About = () => {
    return (
        <div className="about-page">
            <h1>About Page</h1>
            <div className="container">

                {/* <User title="Functional Component" /> */}
                <UserClass title="Class Based Component" name="Mohit Kucheriya" />
            </div>
        </div>
    )
}

export default About