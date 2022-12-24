import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [login, setLogin] = useState(false);
  const onLoginBtn = () => {
    setLogin(!login);
  };
  return (
    <div className=" container header">
      <div className="header">
        <h1>Asset Management</h1>
      </div>

      <Link
        type="button"
        className="btn btn-primary"
        onClick={onLoginBtn}
        to="login-page"
        style={{ height: '2%', marginTop: '1.5%' }}
      >
        login
      </Link>
    </div>
  );
};
export default Header;
