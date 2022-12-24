import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import NavBar from './NavBar';
import { GetEdit, setEmployee, updateEditEmployee } from '../actions';
import { Link, useHistory, useParams } from 'react-router-dom';

const AddEmployee = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (id) {
      dispatch(GetEdit(id));
    }
  }, [id]);
  const { selectedEmployeeDetails, selectedEmployeeId, EDITVAL } = useSelector(
    (state) => state.employee
  );
  // console.log(EDITVAL);
  useEffect(() => {
    if (selectedEmployeeId) {
      setFieldValue('ename', selectedEmployeeId.ename);
    }
  }, [selectedEmployeeId]);
  const validate = (values) => {
    const errors = {};
    if (!values.ename) {
      errors.ename = 'name Required';
    }

    if (!values.employeeid) {
      errors.employeeid = 'Employee ID Required';
    }

    if (!values.email) {
      errors.email = 'Email Required';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid Email';
    }
    if (!values.department) {
      errors.department = 'department Required';
    }
    if (!values.phone) {
      errors.phone = 'phone number Required';
    }

    return errors;
  };

  const {
    setFieldValue,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    errors,
  } = useFormik({
    initialValues: {
      ename: id ? EDITVAL.ename : '',
      employeeid: id ? EDITVAL.employeeid : '',
      email: id ? EDITVAL.email : '',
      department: id ? EDITVAL.department : '',
      phone: id ? EDITVAL.phone : '',
    },
    validate,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log('values', values);
      console.log('values.phone', values.phone);
      if (id) {
        dispatch(updateEditEmployee(id, values));
      } else {
        console.log('values:', values);
        dispatch(setEmployee(values));
      }

      history.push('/ListEmployee');
    },
  });

  return (
    <div>
      <NavBar />

      <div style={{ margin: '50px 50px 50px 50px' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Employee name</label>
            <input
              type="text"
              className="form-control"
              placeholder="employee name"
              name="ename"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ename}
            />
          </div>
          <p>
            {' '}
            {touched.ename && errors.ename ? (
              <span className="text-danger">{errors.ename}</span>
            ) : null}
          </p>
          <div className="form-group">
            <label>Employee ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="employee id"
              name="employeeid"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.employeeid}
            />
          </div>
          <p>
            {' '}
            {touched.id && errors.employeeid ? (
              <span className="text-danger">{errors.employeeid}</span>
            ) : null}
          </p>
          <div className="form-group">
            <label>Employee Email-ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="employee mail id"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <p>
            {' '}
            {touched.email && errors.email ? (
              <span className="text-danger">{errors.email}</span>
            ) : null}
          </p>
          <div className="form-group">
            <label>department</label>
            <input
              className="form-control"
              placeholder="employee department"
              name="department"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.department}
            />
            <p>
              {' '}
              {touched.department && errors.department ? (
                <span className="text-danger">{errors.department}</span>
              ) : null}
            </p>
          </div>
          <div className="form-group">
            <label>phone</label>
            <input
              className="form-control"
              type="number"
              placeholder="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <p>
              {' '}
              {touched.phone && errors.phone ? (
                <span className="text-danger">{errors.phone}</span>
              ) : null}
            </p>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link type="button" className="btn btn-light" to="/dashboard">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
