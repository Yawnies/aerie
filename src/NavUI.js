import BottomLogo from './textlogo.svg';
import Logo from "./logo.svg";
import Home from './Home.js';
import Error from './Error';
import About from './About';
import Create from './Create';
import Data from './Data';
import LogDetails from './LogDetails';
import { Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

const NavUI = () => {
    return (
        <div className="global-wrapper">
            <div className="background-wrapper">
                <div className="background-move"></div>
            </div>
            <div className="wrapper">
                <div className="left-border">
                    
                </div>
                <div className="container">
                    <div className="header">

                        <Link to="/">HOME</Link>
                        <Link to="/data">DATA</Link>

                        <div className="logo">
                            <img src={Logo} alt="svg" />
                        </div>

                        <Link to="/create">CREATE</Link>
                        <Link to="/about">ABOUT</Link>

                    </div>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/create" element={<Create />} />
                        <Route exact path="/data" element={<Data />} />
                        <Route path="/data/:id" element={<LogDetails />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
                <div className="bottom-logo">
                    <img src={BottomLogo} alt="" />
                </div>
            </div>
            <div className="right-border">
                
            </div>
    </div>
  </div>
    );
}
 
export default NavUI;