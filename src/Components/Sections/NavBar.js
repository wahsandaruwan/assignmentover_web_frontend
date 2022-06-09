// Custom components & modules
import MainButton from "../Elements/MainButton"

// Custom styling
import "./Styles/NavBarStlyes.css"

const NavBar = () => {
    return (
        <>
            <div className="nav-bar">
                <div className="logo">
                    <img src="./assets/logo.png" alt="Assignment Over" />
                </div>
                <div className="menu">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Our Services</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                    <li>
                        <a href="">Testimonials</a>
                    </li>
                    <li>
                        <MainButton buttonText="Dark" />
                    </li>
                </div>
            </div>
        </>
    );
};

export default NavBar;
