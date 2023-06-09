import { Link } from "react-router-dom"


const NotFound = () => {
    return ( 
        <div className="className">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Back to the future...</Link>
        </div>
     );}


export default NotFound;