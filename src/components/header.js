import './header.css';
import React, { Component } from 'react';

class Header extends Component{
    render(){
      return (
        <header>
          <a href="#" className="logo">
            <img src="https://1.bp.blogspot.com/-FSJpfNUfiwQ/YVmBlwUDTuI/AAAAAAAABA8/UJWwUNLmi8A-dbv_FAwXhnnOh93BsJiAgCLcBGAsYHQ/s320/logo2.png" />
            <h1>Shop-TUTUTU</h1>
          </a>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <img
              src="https://1.bp.blogspot.com/-TQ6sqw09POE/YVmBmHDNLtI/AAAAAAAABBE/h2kA7cyP42gurgfw1OttA8o6-9IFWvm7wCLcBGAsYHQ/s0/menu1.png"
              className="img1"
            />
            <img
              src="https://1.bp.blogspot.com/-7FrNzRkSTfA/YVmBmBWPd1I/AAAAAAAABBA/7ddyu0cIswgmBH3FCqUAuOnCU6Rq5bgbgCLcBGAsYHQ/s0/menu2.png"
              className="img2"
            />
          </label>
          <div className="links">
            <div>
              <a href="/">Home</a>
              <a href="/Admin">Admin</a>
              <a href="#">Content</a>
              <a href="#">Profile</a>
              <a href="#">About</a>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
        </header>
      );
    }
}


export default Header;