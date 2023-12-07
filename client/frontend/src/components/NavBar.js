import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCamera,
  faCar,
  faPhone,
  faCog,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ type, user }) => {
  return (
    <nav>
      <div className="nav_logo">Snap And Ride</div>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCamera} />
            <span>Photographers</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Fleet</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPhone} />
            <span>Contact us</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCog} />
            <span>About us</span>
          </div>
        </div>
       
      </div>
    </nav>
  );
};

export default NavBar;


