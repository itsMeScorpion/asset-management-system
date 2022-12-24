import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getAllocation } from '../actions';

const AllocationListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllocation());
  }, []);
  const { allocData } = useSelector((state) => state);
  console.log('allocData', allocData.employee);

  const employeeAllocation = allocData.employee.map((data, index) => {
    return (
      <div
        className="card mt-5"
        key={index}
        style={{ width: '18rem', marginLeft: '3%' }}
      >
        <div className="card-body">
          <h5 className="card-title">{data.employee}</h5>
          <p className="card-text">{data.allocatedAssets}</p>
          &nbsp;
        </div>
      </div>
    );
  });

  return (
    <div className="container mt-5">
      <h3>Employee Allocation</h3>
      <Link type="button" className="btn btn-secondary" to="dashboard">
        Back
      </Link>
      <div className="mt-5 d-flex">{employeeAllocation}</div>
    </div>
  );
};
export default AllocationListing;
