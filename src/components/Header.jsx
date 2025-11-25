import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    return(
        <header>
            <nav>
                <div>
                    <Link to="/">
                        <span>KFlix</span>
                    </Link>
                </div>

                <div>
                    <ul>
                        <li>
                            <NavLink to = "/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/upcomming">Upcomming</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/finished">Finished</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <button onClick={() => setDarkMode(true)}>Dark Mode</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;  