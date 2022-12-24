import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { setLogin } from '../actions';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TextField from '@mui/material/TextField';

const LoginPage = ({ setLogin, login }) => {
  const { loginStatus } = useSelector((state) => state.auth);
  const history = useHistory();
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username Required';
    }

    if (!values.password) {
      errors.password = 'Password Required';
    }

    return errors;
  };

  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validate,
      onSubmit: (values) => {
        console.log('values:', values);
        setLogin(values);
        console.log('loginStatus', loginStatus);
        if (JSON.parse(loginStatus) === true) {
          history.push('/dashboard');
          console.log('access granted');
        }
      },
    });
  return (
    <div className="background">
      <div className="text">
        <h1>Admin Login</h1>
        <Link to="/" className="button navIcon">
          Back
        </Link>
      </div>
      <div className="box">
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            // id="standard-basic"
            label="Username"
            variant="standard"
            type="text"
            className="text-white"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <br />
          <small>
            {touched.username && errors.username ? (
              <span className="text-danger">{errors.username}</span>
            ) : null}
          </small>
          <TextField
            // id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <br />
          <small>
            {touched.password && errors.password ? (
              <span className="text-danger">{errors.password}</span>
            ) : null}
          </small>

          <button
            type="submit"
            onClick={handleSubmit}
            className="button navIcon"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { login: state.auth };
};
export default connect(mapStateToProps, { setLogin })(LoginPage);
