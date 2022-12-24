import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [login, setLogin] = useState(true);
  const onLoginBtn = () => {
    setLogin(!login);
    localStorage.setItem('loginStatus', !login);
  };
  return (
    <div className=" container header">
      <div className="header">
        <h1>Asset Management</h1>
      </div>

      <Link className="navIcon" to="AddEmployee">
        Add Employee
      </Link>
      <Link className="navIcon" to="AddAsset">
        Add Assets
      </Link>
      <Link className="navIcon" to="AssetAllocation">
        Asset Allocations
      </Link>
      <Link className="navIcon" to="ResetPassword">
        Change Password
      </Link>
      <Link
        className="btn btn-danger"
        style={{ height: '2%', marginTop: '1.5%' }}
        onClick={onLoginBtn}
        to="/"
      >
        Logout
      </Link>
    </div>
  );
};
export default NavBar;
