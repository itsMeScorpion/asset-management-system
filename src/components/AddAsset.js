import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import { setAsset } from '../actions';
import { Button } from '@mui/material';

import ImageUploader from 'react-images-upload';

const AddAsset = () => {
  const [image, setImage] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name Required';
    }

    if (!values.serialnumber) {
      errors.serialnumber = 'Serial Number Required';
    }

    if (!values.date) {
      errors.date = 'Date Required';
    }

    if (!values.ivalue) {
      errors.ivalue = 'Invoice Value Required';
    }

    if (!values.inumber) {
      errors.inumber = 'Invoice value Required';
    }
    if (!values.description) {
      errors.description = 'Description Required';
    }

    return errors;
  };
  const onDrop = (pictureFiles, pictureDataURLs) => {
    setImage(pictureDataURLs[0]);
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
      name: '',
      serialnumber: '',
      inumber: '',
      ivalue: '',
      date: '',
      description: '',
      image: '',
    },
    validate,
    onSubmit: (values) => {
      values = { ...values, image: image };
      dispatch(setAsset(values));
      history.push('/ListAsset');
    },
  });

  return (
    <div>
      <NavBar />

      <div style={{ margin: '50px 50px 50px 50px' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Item name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </div>
          <p>
            {' '}
            {touched.name && errors.name ? (
              <span className="text-danger">{errors.name}</span>
            ) : null}
          </p>
          <div className="form-group">
            <label>Serial Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="serial number"
              name="serialnumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.serialnumber}
            />
          </div>
          <p>
            {' '}
            {touched.serialnumber && errors.serialnumber ? (
              <span className="text-danger">{errors.serialnumber}</span>
            ) : null}
          </p>
          <div className="form-group">
            <label>Invoice Value</label>
            <input
              type="text"
              className="form-control"
              placeholder="invoice Value"
              name="ivalue"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ivalue}
            />
          </div>
          <p>
            {' '}
            {touched.ivalue && errors.ivalue ? (
              <span className="text-danger">{errors.ivalue}</span>
            ) : null}
          </p>
          <div className="form-group">
            <label>Invoice Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="invoice Number"
              name="inumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.inumber}
            />
          </div>
          <p>
            {' '}
            {touched.inumber && errors.inumber ? (
              <span className="text-danger">{errors.inumber}</span>
            ) : null}
          </p>
          <div className="form-group">
            <label>Date Of Purchase</label>
            <input
              className="form-control"
              type="date"
              placeholder="date of purchase"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
            <p>
              {' '}
              {touched.date && errors.date ? (
                <span className="text-danger">{errors.date}</span>
              ) : null}
            </p>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              placeholder="description"
              rows="2"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <p>
              {' '}
              {touched.description && errors.description ? (
                <span className="text-danger">{errors.description}</span>
              ) : null}
            </p>
          </div>
          <div className="form-group">
            <label>Image</label>
            <ImageUploader
              singleImage={true}
              withPreview={true}
              withIcon={true}
              buttonText="Choose images"
              onChange={onDrop}
              imgExtension={['.jpeg', '.jpg', '.gif', '.png', '.gif']}
              maxFileSize={3242880}
            />
            <p>
              {' '}
              {touched.image && errors.image ? (
                <span className="text-danger">{errors.image}</span>
              ) : null}
            </p>
          </div>
          <button type="submit" className="btn btn-primary" to="ListAsset">
            Submit
          </button>{' '}
          <Link type="button" className="btn btn-secondary" to="dashboard">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddAsset;
