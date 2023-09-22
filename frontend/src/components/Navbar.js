import { Link } from "react-router-dom";

const Navbar = () =>{
    
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Mate 🏋🏻</h1>
                </Link>
                <Link to ="https://github.com/ebin-sabu/WorkoutMERNApp">
                    <h4>©️ Ebin Pereppadan Sabu</h4>
                </Link>
            </div>
        </header>
    )
}

export default Navbar